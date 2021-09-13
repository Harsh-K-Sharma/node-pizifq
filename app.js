const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const path = require('path');

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'dist')));

app.post('/userAccount', (req, res) => {
  console.log('In userAccount');
  res.json(req.body.userName);
});

app.get('/register', (req, res) => {
  console.log('In register');
  res.json('Recieved hit on /register');
});

app.get('/login', (req, res) => {
  console.log('In Login');
  res.json('Recieved hit on /login !!!');
});

app.get('/health', (req, res) => {
  res.send('Running');
});

app.listen(3000, () => console.log('Running'));
