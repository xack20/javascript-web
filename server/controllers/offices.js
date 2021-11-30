const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { Office } = require('../models');

// @desc      Get Offices
// @route     GET /api/v1/Offices
// @access    Public
exports.getOffices = asyncHandler(async (req, res, next) => {
    const offices = await Office.findAll();

    return res.status(200).json({
      success: true,
      message: "Get all the offices",
      count: offices.length,
      data: offices
    });
});

// @desc      Get single Office
// @route     GET /api/v1/Offices/:id
// @access    Public
exports.getOffice = asyncHandler(async (req, res, next) => {
  const office = await Office.findByPk(req.params.id);

  if(!office){
    return next(
      new ErrorResponse(`No Office with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Get office of id ${req.params.id}`,
    data: office
  });
});

// @desc      Add Office
// @route     POST /api/v1/Offices
// @access    Private
exports.addOffice = asyncHandler(async (req, res, next) => {
  // req.body.user = req.user.id;

  const office = await Office.create(req.body);

  res.status(201).json({
    success: true,
    message: `Office Created Successfully with id ${office.id}`,
    data: office
  });
});

// @desc      Update Office
// @route     PUT /api/v1/Offices/:id
// @access    Private
exports.updateOffice = asyncHandler(async (req, res, next) => {

  const [ rowsUpdated, [ office ] ] = await Office.update(req.body, {
    where: { id: req.params.id },
    returning: true 
  });

  if(!office){
    return next(
      new ErrorResponse(`No Office with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Office with the id ${req.params.id} updated successfully`,
    data: office
  });
});

// @desc      Delete Office
// @route     DELETE /api/v1/Offices/:id
// @access    Private
exports.deleteOffice = asyncHandler(async (req, res, next) => {
  const office = await Office.findByPk(req.params.id)

  if(!office){
    return next(
      new ErrorResponse(`No office with the id of ${req.params.id}`, 404)
    );
  }
  
  await office.destroy();

  res.status(200).json({
    success: true,
    message: `Office with the id ${req.params.id} deleted successfully`,
    data: {}
  });
});

