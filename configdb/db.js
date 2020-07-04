const mongoose = require('mongoose');

const options = {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const MONGODB_URI = process.env.MONGODB_URI ||"mongodb://localhost:27017/garage"
mongoose.connect(MONGODB_URI, options);

module.exports = mongoose;