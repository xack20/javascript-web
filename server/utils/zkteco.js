const ZKLib = require('zklib');

ZK = new ZKLib({
  ip: '192.168.0.201',
  port: 4370,
  inport: 5200,
  timeout: 5000,
});

// connect to access control device
ZK.connect((err) => {
  if (err) throw err;
 
  // read the time info from th device
  // ZK.serialNumber (function(err, data) {
  //   ZK.disconnect();// disconnect from the device
  //   if (err) throw err;
  //   console.log("Device Serial no. " + data);
  // });

  // Get version of machine.
  // ZK.version (function(err, data) {
  //   ZK.disconnect();// disconnect from the device
  //   if (err) throw err;
  //   console.log("Device version: " + data);
  // });

  // read the time info from th device
  // ZK.getTime(function(err, t) {
  //   ZK.disconnect();// disconnect from the device
  //   if (err) throw err;
  //   console.log("Device clock's time is " + t.toString());
  // });

  // get attendence data
  ZK.getAttendance((err, data) => {
    // ZK.disconnect();// disconnect from the device
    if (err) throw err;
    console.log(data);
  });

  // Clear attendence log
  // ZK.clearAttendanceLog(function(err, data) {
  //   //ZK.disconnect();// disconnect from the device
  //   if (err) throw err;
  //   console.log("Cleared Attendence Log");
  // });

  // Get all users of machine
  // ZK.getUser(function(err, data) {
  //   //ZK.disconnect();// disconnect from the device
  //   if (err) throw err;
  //   console.log(data);
  // });

});