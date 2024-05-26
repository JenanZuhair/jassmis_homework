const express = require('express');
const path = require('path');
const menuDatabase = require('./data/jasmi-menu');  // استيراد البيانات

const app = express();

// إعداد محرك العرض
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// المسار الرئيسي
app.get('/', (req, res) => {
  res.render('home');
});

// مسار قائمة الطعام
app.get('/menuItems', (req, res) => {
  const menuItems = menuDatabase.getAll();
  res.render('menuItems/index', { menuItems });
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
