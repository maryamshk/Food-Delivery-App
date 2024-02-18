const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://maryamjavedshk:lorelai@cluster0.0yga0wa.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to MongoDB');
    })

    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    })

}
module.exports = mongoDB;

