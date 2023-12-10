console.log(server.js);

const express = require('express');
console.log('!!!NODE with EXPRESS!!!');

// initializing app
const app = express();
// console.log(app);

app.use(express.static('server/public'));

// run the app
// function param as a callback
app.listen(5001, () => {
  console.log('Application running on PORT 5001');
});
// ctrl+C = exit

app.get('/hello', (req, res) => {
  res.send('Pickle is fun!');
});