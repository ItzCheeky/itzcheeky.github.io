const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public')); // Assuming your HTML and JS files are in a 'public' directory.

// Create a POST route to handle form submissions.
app.post('/sendEmail', (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter (you need to set up your email provider's SMTP settings here).
    const transporter = nodemailer.createTransport({
        service: 'your_email_service', // e.g., 'Gmail', 'Yahoo', etc.
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_email_password',
        },
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'recipient_email@example.com',
        subject: 'New contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email.
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});