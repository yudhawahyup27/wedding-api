const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
const appRoute = require('./src/routes/route-pesan');
app.use('/allpesan', appRoute);

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});