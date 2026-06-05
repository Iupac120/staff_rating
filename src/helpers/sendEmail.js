const nodeMailer =  require("nodemailer");

const sendMail =  async (to,subject,html) => {
     const transporter = nodeMailer.createTransport({
        host:process.env.NODEMAILER_HOST,
        port:process.env.NODEMAILER_PORT,
        secure:true,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
     });
     await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to,
        subject,
        html
     })
}

module.exports = sendMail