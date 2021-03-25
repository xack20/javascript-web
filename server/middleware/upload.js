const multer = require('multer')
const path = require('path');

//Set the Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.UPLOAD_PATH)
  },
  filename: function (req, file, cb) {
    const imageName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  }
});

// Check File Type
function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif|pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 30000000}, //30mb
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
});

module.exports = upload;