const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD pipeline!');
  res.send('Hello this is Bhavya');
  res.send("I'm practicing CI/CD pipeline");

});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
