// Import Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
