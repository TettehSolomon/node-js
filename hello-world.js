//task 1
console.log('Hello World');

//task 2
// server.js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, () => {
    console.log('Server running at http://localhost:3000/');
});

//task 3
// server.js// file-operation.js
const fs = require('fs');

// Writing to a file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

// Reading from a file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});


//task 4
// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true
    });
    console.log('Generated password:', password);
}

generateRandomPassword();


//task 5
// email-sender.js
const nodemailer = require('nodemailer');

// Configure transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// Email message options
const mailOptions = {
    from: '',
    to: '',
    subject: 'Test Email',
    text: 'This is a test email from Node.js'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Email not sent:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
