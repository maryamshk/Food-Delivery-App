const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://maryamjavedshk:lorelai@cluster0.0yga0wa.mongodb.net/gofoodmern';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = mongoDB;



