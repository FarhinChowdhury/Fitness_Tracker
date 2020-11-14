const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// const db = require("./models/workouts.js");
// console.log(db)
// db.create({name:"something", type:"resistence"})


// routes
require("./router/api.js")(app);
require("./router/html.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
