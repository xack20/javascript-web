const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

const {
  getJobs,
  getJob,
  addJob,
  updateJob,
  deleteJob
} = require('../controllers/jobs');


router
  .route('/')
  .get(getJobs)
  .post( addJob);

router
  .route('/:id')
  .get(getJob)
  .put(updateJob)
  .delete(deleteJob);

module.exports = router;
