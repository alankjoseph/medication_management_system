const multer=require('multer');
// const path=require('path');

// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/');
//     },
//     filename:(req,file,cb)=>{
//         const name=Date.now()+'-'+file.originalname;
//         cb(null,name);
//     }
// })
// const upload=multer({storage:storage})

// module.exports=upload;

// const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dnxxq6g1c',
  api_key: '581257883147512',
  api_secret: 'NxdRmMJoa9u0G3JalbkpTJOCPKY'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'MedicationManagement',
    allowed_formats: ['pdf']
  }
});

const upload = multer({ storage: storage });

module.exports = upload;