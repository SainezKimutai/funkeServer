const nodemailer = require('nodemailer');

function emailVerificationCode(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "smtp.gmail.com",
          port: 465,
            auth: {
                user: 'dev@imprintaf.com',
                pass: 'Impintd3v2019!'
            }
        }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: 'info@funkescience.com',
            to: reqParam.reciever,
            subject: "Email Verification",
            text: 'Hello',
            html:  '<section style="width: 100%; display: flex; border: none;">' +

                  '<div style=" width: 100%; max-width: 700px; background-color: #3238F8; margin: auto"> ' +

                  '<div style="padding: 2em 1em 2em 1em; width: 100%; text-align: center; color: white; font-weight: bold; font-size: 24px; text-transform: uppercase;">Funke Science</div>' +

                  '<div style="width: 77.6%; margin: auto; border: none; background-color: white; padding: 2em 1em 2em 1em; text-align: center; font-size: 22px; font-weight: bold; color: black; border-radius: 0px; border-top-right-radius: 2px; border-top-left-radius: 2px;">Email Verification Code</div> ' +

                  '<div style="background-color: #FF9F00; border: none;  padding: 0 0 4em 0;">' +

                  '<div style="width: 80%; background-color: white;' +
                          'margin: auto; background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-webkit-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-moz-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-ms-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-o-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          'border-radius: 0px; border: none; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px;height: 400px;padding: 1em;"> ' +



                  '<div style="width: 100%; text-align: center; font-size: 16px; font-weight: bold; padding: 1em;color: #2f353a;">Hello,</div> ' +

                  '<p style=" width: 100%; text-align: center; font-size: 13px; font-weight: bold; padding: 0 1em 1em 1em; color: #2f353a; margin-bottom: 3em;">Please use the code below to complete your registration.</p>' +

                  '<div style="margin: auto; background-color: #2DB34D; color: white; width: fit-content; padding: 1em; border-radius: 1em; letter-spacing: 1em; font-size: 16px;">' + reqParam.code + '</div> ' +

                  '</div> ' +

                  '</div> ' +

                  '</div> ' +

                  '</section>'

        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : (reject('Something went wrong'), console.log(err));
         });


    });
}















function resetPasswordCode(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "smtp.gmail.com",
          port: 465,
            auth: {
                user: 'dev@imprintaf.com',
                pass: 'Impintd3v2019!'
            }
        }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: 'info@funkescience.com',
            to: reqParam.reciever,
            subject: "Password Reset",
            text: 'Hello',
            html:  '<section style="width: 100%; display: flex; border: none;">' +

                  '<div style=" width: 100%; max-width: 700px; background-color: #3238F8; margin: auto"> ' +

                  '<div style="padding: 2em 1em 2em 1em; width: 100%; text-align: center; color: white; font-weight: bold; font-size: 24px; text-transform: uppercase;">Funke Science</div>' +

                  '<div style="width: 77.6%; margin: auto; border: none; background-color: white; padding: 2em 1em 2em 1em; text-align: center; font-size: 22px; font-weight: bold; color: black; border-radius: 0px; border-top-right-radius: 2px; border-top-left-radius: 2px;">Password Reset Code</div> ' +

                  '<div style="background-color: #FF9F00; border: none;  padding: 0 0 4em 0;">' +

                  '<div style="width: 80%; background-color: white;' +
                          'margin: auto; background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-webkit-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-moz-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-ms-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          '-o-background-image: linear-gradient(to top, #FF9F00, white 5%); ' +
                          'border-radius: 0px; border: none; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px;height: 400px;padding: 1em;"> ' +



                  '<div style="width: 100%; text-align: center; font-size: 16px; font-weight: bold; padding: 1em;color: #2f353a;">Hello,</div> ' +

                  '<p style=" width: 100%; text-align: center; font-size: 13px; font-weight: bold; padding: 0 1em 1em 1em; color: #2f353a; margin-bottom: 3em;">Please use the code below to complete your password reset process.</p>' +

                  '<div style="margin: auto; background-color: #2DB34D; color: white; width: fit-content; padding: 1em; border-radius: 1em; letter-spacing: 1em; font-size: 16px;">' + reqParam.code + '</div> ' +

                  '</div> ' +

                  '</div> ' +

                  '</div> ' +

                  '</section>'

        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : (reject('Something went wrong'), console.log(err));
         });


    });
}


 module.exports = { emailVerificationCode, resetPasswordCode }
