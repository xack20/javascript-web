const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const shortid = require('shortid');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.findAll()

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
});

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.params.id);

  if(!user){
    return next(
      new ErrorResponse(`No User with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  // req.body.password = shortid.generate();;
  const user = await User.create(req.body);

  // Send sms
  // console.log(`SMS => id: ${user.email}, password: ${req.body.password}`.green.inverse)

  res.status(201).json({
    success: true,
    message: `User with id ${user.id} Created Successfully`,
    data: user
  });
});

// @desc      Update user
// @route     PUT /api/v1/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const [ rowsUpdated, [ user ] ] = await User.update(req.body, {
    where: { id: req.params.id },
    returning: true
  });

  if(!user){
    return next(new ErrorResponse(`No user with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Delete user
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.params.id)

  if(!user){
    return next(
      new ErrorResponse(`No User with the id of ${req.params.id}`, 404)
    );
  }
  
  await user.destroy();

  res.status(200).json({
    success: true,
    message: `User with the id ${req.params.id} deleted successfully`,
    data: {}
  });
});
