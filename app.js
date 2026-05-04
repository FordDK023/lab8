const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// เชื่อมต่อ MySQL ของ MAMP
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'supermarket_db'
});

db.connect((err) => {
    if (err) {
        console.log('Database connection error:', err);
        return;
    }

    console.log('Connected to database');
});

// ทำให้ไฟล์ controller ใช้ db ได้
global.db = db;

// ตั้งค่า EJS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index.routes'));
app.use('/product', require('./routes/product.routes'));

// Start server
app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});