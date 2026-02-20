const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Backend is running perfectly!</h1><p>Rishi DevOps Project - Port 3000</p>');
});

app.listen(port, '0.0.0.0', () => {
  console.log('Server is live at http://localhost:3000');
});
