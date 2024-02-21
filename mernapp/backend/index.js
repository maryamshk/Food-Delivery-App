const express = require('express')
const app = express()
const port = 5000;
const mongoDB = require('./db');
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})