const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

const {
  getDesignations,
  getDesignation,
  addDesignation,
  updateDesignation,
  deleteDesignation
} = require('../controllers/designations');


router
  .route('/')
  .get(getDesignations)
  .post( addDesignation);

router
  .route('/:id')
  .get(getDesignation)
  .put(updateDesignation)
  .delete(deleteDesignation);

module.exports = router;
