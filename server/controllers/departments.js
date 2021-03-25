const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const { Department } = require('../models');

// @desc      Get Departments
// @route     GET /api/v1/Departments
// @access    Public
exports.getDepartments = asyncHandler(async (req, res, next) => {
    const departments = await Department.findAll();

    return res.status(200).json({
      success: true,
      message: "Get all the Departments",
      count: departments.length,
      data: departments
    });
});

// @desc      Get single Department
// @route     GET /api/v1/Departments/:id
// @access    Public
exports.getDepartment = asyncHandler(async (req, res, next) => {
  const department = await Department.findByPk(req.params.id);

  if(!department){
    return next(
      new ErrorResponse(`No Department with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Get Department of id ${req.params.id}`,
    data: department
  });
});

// @desc      Add Department
// @route     POST /api/v1/Departments
// @access    Private
exports.addDepartment = asyncHandler(async (req, res, next) => {
  // req.body.user = req.user.id;

  const department = await Department.create(req.body);

  res.status(201).json({
    success: true,
    message: `Department Created Successfully with id ${department.id}`,
    data: department
  });
});

// @desc      Update Department
// @route     PUT /api/v1/Departments/:id
// @access    Private
exports.updateDepartment = asyncHandler(async (req, res, next) => {

  const [ rowsUpdated, [ department ] ] = await Department.update(req.body, {
    where: { id: req.params.id },
    returning: true 
  });

  if(!department){
    return next(
      new ErrorResponse(`No Department with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: `Department with the id ${req.params.id} updated successfully`,
    data: department
  });
});

// @desc      Delete Department
// @route     DELETE /api/v1/Departments/:id
// @access    Private
exports.deleteDepartment = asyncHandler(async (req, res, next) => {
  const department = await Department.findByPk(req.params.id)

  if(!department){
    return next(
      new ErrorResponse(`No Department with the id of ${req.params.id}`, 404)
    );
  }
  
  await department.destroy();

  res.status(200).json({
    success: true,
    message: `Department with the id ${req.params.id} deleted successfully`,
    data: {}
  });
});

