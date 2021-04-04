const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

const {
  getOffices,
  getOffice,
  addOffice,
  updateOffice,
  deleteOffice
} = require('../controllers/offices');


router
  .route('/')
  .get(getOffices)
  .post( addOffice);

router
  .route('/:id')
  .get(getOffice)
  .put(updateOffice)
  .delete(deleteOffice);

module.exports = router;
