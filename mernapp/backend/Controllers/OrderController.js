const Order = require('../models/Orders');

module.exports.orderData = async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_data: req.body.Order_data });

  // if email doesnt exist on db create else insertMany

  letEId = await Order.findOne({ 'email': req.body.email })
  console.log(EId);
  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data]
      }).then(() => { res.json({ success: true }) })
    }

    catch (err) {
      console.log(err.message)
      res.send('server error', err.message)
    }
  }

  else {
    try {
      Order.findOneAndUpdate({ 'email': req.body.email }),
        { $push: { order_data: data } }.then(() => {
          res.json({ success: true })
        })
    }

    catch (err) {
      console.log(err.message)
      res.send('server error', err.message)
    }
  }
}