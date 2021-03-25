const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
const {
  getZkAttendances,
} = require('../controllers/attendances');


// router
//   .route('/')
//   .get(getAttendances)
//   .post(protect, addAttendance);

// router
//   .route('/:id')
//   .get(getAttendance)
//   .put(protect, updateAttendance)
//   .delete(protect, authorize(['admin']), deleteAttendance);

router.route('/zkteco').get(getZkAttendances)
// router.route('/test/noty').get(startNotify)


module.exports = router;
