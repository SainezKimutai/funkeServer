const nodemailer = require('nodemailer');

function sendCode(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "smtp.gmail.com",
          port: 465,
          auth: {
              user: 'muindegeofrey@gmail.com',
              pass: 'Gracemakau2019'
          }
        }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: 'info@funkescience.com',
            to: reqParam.reciever,
            subject: "Email verification",
            text: 'Hello',
            html: ' <section style="width: 400px; height: 200px; background-color: #f6f6f6; margin: 20px 100px; border-radius: 2px; border: solid 1px #4ec293; padding: 1em;">' +
              '<div style="font-size: 13px; margin-bottom: 20px;"> Hello </div>' +
              '<div style="font-size: 12px; margin-bottom: 20px;">Please use the code below to complete your registration.</div>' +
              '<div style="margin-bottom: 20px;">'+
                  '<div style="width: 100%; height: 2em; letter-spacing: 1em; font-size: 16px;">' + reqParam.code + '</div>' +
              '</div>'+
              '<div style="font-size: 10px; font-style: italic;">www.funkescience.com</div>'+
            '</section>'
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });


    });
}



 module.exports = { sendCode }
