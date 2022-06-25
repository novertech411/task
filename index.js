const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://test:test@cluster0.endsq.mongodb.net/zuriFlight?retryWrites=true&w=majority",
    {
      // userNewUrlParser: true,
      //  useCreateIndex: true,
      //  useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log("connected to db");
};
connectDB();
app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongodb+srv://test:<password>@cluster0.endsq.mongodb.net/?retryWrites=true&w=majority
