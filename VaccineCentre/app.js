const express = require('express');
const app = express();
 
app.use(express.json());
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/pages'));
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.post('/ack.htm', (req, res) => {
  res.sendFile(__dirname + '/pages/ack.htm');
});
 
app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});