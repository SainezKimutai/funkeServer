const fs = require('fs');

// Client Profile Image
async function uploadClientImage(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/clientProfileImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/clientProfileImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });

}


async function removeClientImage(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/clientProfileImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}



// Lessons Image
async function uploadLessonImage(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/lessonImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/lessonImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });

}


async function removeLessonImage(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/lessonImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}






// Lessons video
async function uploadLessonVideo(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/videos/lessonVideos/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/videos/lessonVideos/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });

}


async function removeLessonVideo(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/videos/lessonVideos/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}




// Kits Image
async function uploadKitImage(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/kitImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/kitImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });

}


async function removeKitImage(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/kitImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}





// Teacher Image
async function uploadTeacherImage(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/teacherImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/teacherImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });

}


async function removeTeacherImage(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/teacherImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}




// Blog Image
async function uploadBlogImage(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/blogImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve({
        name: nameTheFile,
        url: 'static/images/blogImages/'+nameTheFile
      })
    }
    if(err){
       console.log(err)
    }
  });
  });

}


async function removeBlogImage(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/blogImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}




module.exports = {
                    uploadClientImage, removeClientImage,
                    uploadLessonImage, removeLessonImage,
                    uploadLessonVideo, removeLessonVideo,
                    uploadKitImage, removeKitImage,
                    uploadTeacherImage, removeTeacherImage,
                    uploadBlogImage, removeBlogImage
                  };
