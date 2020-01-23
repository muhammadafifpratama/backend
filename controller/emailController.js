const db = require('../database');
const transporter = require('../helper/nodemailer');
const Crypto = require('crypto');

module.exports = {
    sendEmail : (req,res) => {
        let mailOptions = {
            from : 'ngetes <afifpratama@gmail.com>',
            to: 'guaplei@gmail.com',
            subject: 'Email ngetes',
            html : `<h3>H3H3</h3>`
        }
        transporter.sendMail(mailOptions, (err,res2) => {
            if(err){
                console.log(err)
                return res.status(500).send({ message : err })
            }
            console.log('success')
            return res.status(200).send({message: 'success'})
        })
    }
}