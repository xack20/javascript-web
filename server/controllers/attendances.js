const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const moment = require('moment')
const _ = require('lodash')
const fs = require('fs');
const path = require('path');


// const { Attendance } = require('../models');

const ZKLib = require('node-zklib/zklib')

const attendenceRules = (startTime, endTime, checkin, checkout) => {

  let early, late, earlyLeave, overtime, status, remarks;
  let total = moment.duration(moment(checkout).diff(checkin))
  let totalHours = `${parseInt(total.asHours())} hours, ${parseInt(total.asMinutes())%60} minutes.`;

  const durationEarly = moment.duration(moment(startTime).diff(checkin))
  const durationLate = moment.duration(moment(checkin).diff(startTime))
  const durationEarlyLeave = moment.duration(moment(endTime).diff(checkout))
  const durationOvertime = moment.duration(moment(checkout).diff(endTime))
  // console.log(durationEarly.asHours(), durationLate.asHours(), durationEarlyLeave.asHours(), durationOvertime.asHours())

  // Statuses: In-time, Late, Early Leave, Half Day, Absent 
  // 9.05 er age In Time
  if(checkin && moment(checkin).isSameOrBefore(startTime)){
    status="In Time";
    early = `${parseInt(durationEarly.asHours())} hours, ${parseInt(durationEarly.asMinutes())%60} minutes.`;
  }
  // 9:05am er por "Late"
  if(checkin && moment(checkin).isAfter(startTime)){
    status="Late";
    late = `${parseInt(durationLate.asHours())} hours, ${parseInt(durationLate.asMinutes())%60} minutes.`;
  } 
  // 6:00pm er age "Early Leave"
  if(checkout && moment(checkout).isBefore(endTime)){
    status = status==="Late" ? "Late & Early Leave" : "Early Leave"
    earlyLeave = `${parseInt(durationEarlyLeave.asHours())} hours, ${parseInt(durationEarlyLeave.asMinutes())%60} minutes.`;
  }
  // 6:00pm er por "Overtime"
  if(status==="In Time" && checkout && moment(checkout).isAfter(endTime)){
    // status="Overtime";
    overtime = `${parseInt(durationOvertime.asHours())} hours, ${parseInt(durationOvertime.asMinutes())%60} minutes.`;
  } 

  // console.log(moment(checkout).diff(checkin, 'hours'))
  // 8 hours er kom stay korle "Half Day"
  if(checkin && checkout && total.asHours() >= 4 && total.asHours() < 8){
    status = "Half Day"
    // console.log("Halfday", moment(checkout).diff(checkin, 'hours'))
  }
  // 4 hours er kom stay korle "Absent"
  if(checkin && checkout && total.asHours() < 4){
    status = "Absent"
    // console.log("Absent", moment(checkout).diff(checkin, 'hours'))
  }

  // Over time er hisab onno rokom
  if(durationLate>0 && durationOvertime>0 && durationOvertime-durationLate*2>0){
    status="In Time"
    overtime = durationOvertime-durationLate*2;
  }

  overtime = overtime || 0;
  // console.log(overtime)
  
  return { early, late, earlyLeave, overtime, totalHours, status, remarks }
}


// @route   GET api/Attendances/zkteco
// @desc    get all the Attendances from zkteco mechine
// @access  Public
exports.getZkAttendances2 = asyncHandler(async (req, res, next) => {

  let zkInstance = new ZKLib('192.168.0.201', 4370, 10000, 4000);
  try {
    // Create socket to machine 
    await zkInstance.createSocket()
    // Get general info like logCapacity, user counts, logs count
    // It's really useful to check the status of device 
    console.log(await zkInstance.getInfo())
  } 
  catch(err) {
    console.log(err)
  }

  // Disconnect the machine ( don't do this when you need realtime update :))) 
  // const users = await zkInstance.getUsers();
  // console.log(users.data.length);

  const {data:attendences} = await zkInstance.getAttendances();
  console.log(attendences);

  return res.status(200).json({
    success: true,
    message: "",
    count: attendences.length,
    data: attendences
  });
})

exports.getZkAttendances = asyncHandler(async (req, res, next) => {
  // Read JSON files
  let zkdata = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '_data', 'attendances.json'), 'utf-8')
  );

  const employees = [
    {id: 1, name: "Biprodas"},
    {id: 3, name: "Istiqur"},
    {id: 12, name: "Milon"}
  ]

  zkdata.forEach(data => data.recordTime = moment(data.recordTime).format())
  // zkdata = _.map(zkdata, dd =>  {
  //   return _.assign(dd, _.find(employees, {
  //     id: Number(dd.deviceUserId)
  //   }));
  // });

  // console.log(moment().format("HH:mm"), moment().isAfter("09:05", "HH:mm"))
  // const currentTime = moment("2020-07-01 09:05");
  // const startTime = moment('09:05 am', "HH:mm a");
  // const endTime = moment('03:30 pm', "HH:mm a");
  // console.log(currentTime, currentTime.isBefore(startTime))

  const data = _(zkdata)
  .groupBy(data => data.recordTime.split('T')[0])
  .map((value, key) => {
    // console.log(key, value.length)
    const startTime = moment(`${key} 09:05`);
    const endTime = moment(`${key} 18:00`);
    // console.log(startTime, endTime)
    const vv = _(value)
    .groupBy(v => v.deviceUserId)
    .map((vl, k)=>{
      const {id, name} = employees.find(emp => emp.id === Number(k));
      const checkin = vl.length>0 ? vl[0].recordTime : null;
      const checkout= vl.length>0 ? vl[vl.length-1].recordTime : null;

      const { early, late, earlyLeave, overtime, status, totalHours, remarks } = attendenceRules(startTime, endTime, checkin, checkout);
      
      return ({ id, name, checkin, checkout, punches: vl.length, early, late, earlyLeave, overtime, totalHours, status, remarks })
    })
    .value();

    employees.forEach(({id, name})=> {
      if(!_.find(vv, {id})) vv.push({id, name});
    })
    return ({date: key, data: vv})
  })
  .value()

  // attendances = _.groupBy(data, d => d.recordTime.split('T')[0])
  // attendances = _(data).groupBy(d => d.recordTime.split('T')[0]).map((value, key) => ({[key]: value})).value();
  // const attendances = _.mapValues(_.groupBy(data, "deviceUserId"), v => _.sortBy(v, "name"));

  return res.status(200).json({
    success: true,
    message: "",
    count: data.length,
    data: data
  });
})

// // @route   GET api/Attendances/:id
// // @desc    get a Attendance by id
// // @access  Public
// exports.getAttendance = asyncHandler(async (req, res, next) => {

// })


// // @route   POST api/Attendances
// // @desc    add new Attendance
// // @access  Public
// exports.addAttendance = asyncHandler(async (req, res, next) => {


// })

// // @route   PUT api/Attendances/:id
// // @desc    update a Attendance by id
// // @access  Public
// exports.updateAttendance = asyncHandler(async (req, res, next) => {

// })

// // @route   DELETE api/Attendances/:id
// // @desc    delete a Attendance by id
// // @access  Public
// exports.deleteAttendance = asyncHandler(async (req, res, next) => {

// })

