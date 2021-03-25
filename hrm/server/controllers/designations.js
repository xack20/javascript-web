const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { Designation } = require('../models');

// @desc      Get Designations
// @route     GET /api/v1/Designations
// @access    Public
exports.getDesignations = asyncHandler(async (req, res, next) => {
    const designations = await Designation.findAll();

    return res.status(200).json({
      success: true,
      message: "Get all the Designations",
      count: designations.length,
      data: designations
    });
});

// @desc      Get single Designation
// @route     GET /api/v1/Designations/:id
// @access    Public
exports.getDesignation = asyncHandler(async (req, res, next) => {
  const designation = await Designation.findByPk(req.params.id);

  if(!designation){
    return next(
      new ErrorResponse(`No Designation with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Get Designation of id ${req.params.id}`,
    data: designation
  });
});

// @desc      Add Designation
// @route     POST /api/v1/Designations
// @access    Private
exports.addDesignation = asyncHandler(async (req, res, next) => {
  // req.body.user = req.user.id;

  const designation = await Designation.create(req.body);

  res.status(201).json({
    success: true,
    message: `Designation Created Successfully with id ${designation.id}`,
    data: designation
  });
});

// @desc      Update Designation
// @route     PUT /api/v1/Designations/:id
// @access    Private
exports.updateDesignation = asyncHandler(async (req, res, next) => {

  const [ rowsUpdated, [ designation ] ] = await Designation.update(req.body, {
    where: { id: req.params.id },
    returning: true 
  });

  if(!designation){
    return next(
      new ErrorResponse(`No Designation with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Designation with the id ${req.params.id} updated successfully`,
    data: designation
  });
});

// @desc      Delete Designation
// @route     DELETE /api/v1/Designations/:id
// @access    Private
exports.deleteDesignation = asyncHandler(async (req, res, next) => {
  const designation = await Designation.findByPk(req.params.id)

  if(!designation){
    return next(
      new ErrorResponse(`No Designation with the id of ${req.params.id}`, 404)
    );
  }
  
  await designation.destroy();

  res.status(200).json({
    success: true,
    message: `Designation with the id ${req.params.id} deleted successfully`,
    data: {}
  });
});

