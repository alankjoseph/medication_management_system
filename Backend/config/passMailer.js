const nodemailer = require('nodemailer')
module.exports = {
    passMailer: nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alanjosephclt@gmail.com',
            pass: 'dwnyspezkisjhbze'
        },
    })
}