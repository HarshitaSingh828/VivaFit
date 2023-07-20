const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // stop the process if unable to connect to mongodb
  });
module.exports = mongoose.connection;