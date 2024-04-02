const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://maryamjavedshk:Brooklyn99@cluster0.0yga0wa.mongodb.net/gofoodmern';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    // const fetched_data = await mongoose.connection.db.collection("food_items");

    // fetched_data.find({}).toArray(async function (err, data) {
    //   await console.log(data);

    //   if (err) console.log(err);
    //   else {
    //     console.log(data);
    //     global.food_items = data;
    //     console.log(global.food_items)

    //   }
    // });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);

  }
}

module.exports = mongoDB;



