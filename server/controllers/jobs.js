const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { Job } = require('../models');

// @desc      Get Jobs
// @route     GET /api/v1/Jobs
// @access    Public
exports.getJobs = asyncHandler(async (req, res, next) => {
    const jobs = await Job.findAll();

    return res.status(200).json({
      success: true,
      message: "Get all the Jobs",
      count: jobs.length,
      data: jobs
    });
});

// @desc      Get single Job
// @route     GET /api/v1/Jobs/:id
// @access    Public
exports.getJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findByPk(req.params.id);

  if(!job){
    return next(
      new ErrorResponse(`No Job with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Get Job of id ${req.params.id}`,
    data: job
  });
});

// @desc      Add Job
// @route     POST /api/v1/Jobs
// @access    Private
exports.addJob = asyncHandler(async (req, res, next) => {
  // req.body.user = req.user.id;

  const job = await Job.create(req.body);

  res.status(201).json({
    success: true,
    message: `Job Created Successfully with id ${job.id}`,
    data: job
  });
});

// @desc      Update Job
// @route     PUT /api/v1/Jobs/:id
// @access    Private
exports.updateJob = asyncHandler(async (req, res, next) => {

  const [ rowsUpdated, [ job ] ] = await Job.update(req.body, {
    where: { id: req.params.id },
    returning: true 
  });

  if(!job){
    return next(
      new ErrorResponse(`No Job with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Job with the id ${req.params.id} updated successfully`,
    data: job
  });
});

// @desc      Delete Job
// @route     DELETE /api/v1/Jobs/:id
// @access    Private
exports.deleteJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findByPk(req.params.id)

  if(!job){
    return next(
      new ErrorResponse(`No Job with the id of ${req.params.id}`, 404)
    );
  }
  
  await job.destroy();

  res.status(200).json({
    success: true,
    message: `Job with the id ${req.params.id} deleted successfully`,
    data: {}
  });
});

