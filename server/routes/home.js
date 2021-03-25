const express = require('express');
const router = express.Router();

// Test api
router.get('/', (req, res, next) => {
  res.status(200).json({
    msg: 'Hello This is Admin Dashboard Response',
  });
});

module.exports = router;
