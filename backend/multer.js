const multer = require("multer");


// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define your upload folder

    console.log("file", file);
    // console.log("req", req);
    // console.log("cb", cb);
  },

  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round.apply(Math.random() * 1e9);
    // Define a unique filename
    const filename = file.originalname.split(".")[0];
    console.log("filename", filename);
    
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Define
    console.log(filename + "-" + uniqueSuffix + ".png");
    
  },
});

// Initialize upload object
exports.upload = multer({ storage: storage });
