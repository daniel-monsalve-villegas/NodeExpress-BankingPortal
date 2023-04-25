const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const accountData = fs.readFileSync('./json/accounts.json', 'utf-8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('./json/users.json', 'utf-8');
const users = JSON.parse(userData);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.get('/savings', function (req, res) {
  res.render('account', { account: accounts.savings });
});

app.get('/checking', function (req, res) {
  res.render('account', { account: accounts.savings });
});

app.get('/credit', function (req, res) {
  res.render('account', { account: accounts.savings });
});
app.listen(3000);
