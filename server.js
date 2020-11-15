const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//connecting to mongoose through heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

});

// routes
require("./router/api.js")(app);
require("./router/html.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
