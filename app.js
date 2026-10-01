const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    name: 'weiwei',
    number: 50,
  });
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
