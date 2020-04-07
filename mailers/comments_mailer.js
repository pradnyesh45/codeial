const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newComment = (Comment) => {
    console.log('Inside newComment mailer', comment);

    nodeMailer.transporter.sendMail({
        from: 'arpan@codingninjas.in',
        to: comment.user.email,
        subject: "New Comment Published",
        html: '<h1>Yup, your comment is now published</h1>'
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}