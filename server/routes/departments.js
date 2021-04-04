const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

const {
  getDepartments,
  getDepartment,
  addDepartment,
  updateDepartment,
  deleteDepartment
} = require('../controllers/departments');


router
  .route('/')
  .get(getDepartments)
  .post( addDepartment);

router
  .route('/:id')
  .get(getDepartment)
  .put(updateDepartment)
  .delete(deleteDepartment);

module.exports = router;
