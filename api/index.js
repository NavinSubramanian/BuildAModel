const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Allow frontend to send requests
app.use(cors());

// File handling
const upload = multer({ storage: multer.memoryStorage() });

app.post('/submit-form', upload.single('file'), async (req, res) => {
    const { name, email, company, description } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "assasin71003@gmail.com",
            pass: "wybf dubf ruzb ftxp"
        }
    });

    let attachments = [];

    if (file) {
        attachments.push({
            filename: file.originalname,
            content: file.buffer
        });
    }

    const mailOptions = {
        from: `"Quote Form" <${process.env.EMAIL_USER}>`,
        to: "nnavinsubramanian@gmail.com",
        subject: `[BAMWebsite] New Quote Request from ${name}`,
        headers: {
            'X-Tag': 'BAMWebsite'
        },
        html: `
      <h3>New Project Quote Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Description:</strong><br>${description.replace(/\n/g, '<br>')}</p>
    `,
        attachments
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error('Email failed:', error);
        res.status(500).json({ success: false, error: 'Failed to send email.' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
