```javascript
const nodemailer = require('nodemailer');

const sendNotification = async (email, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: subject,
    text: text
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

const sendTaskReminder = async (taskData, userData) => {
  const subject = `Reminder for task: ${taskData.title}`;
  const text = `This is a reminder for your task "${taskData.title}". The deadline is ${taskData.deadline}.`;
  await sendNotification(userData.email, subject, text);
}

module.exports = {
  sendNotification,
  sendTaskReminder
};
```