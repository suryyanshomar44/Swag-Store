require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//routes
const authRoute = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const paymentRoute = require("./routes/paymentRoute");

//middlewares
const bodyParser = require("body-parser"); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cookieParser = require("cookie-parser"); //Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
const cors = require("cors"); //(CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
// It allows you to make requests from one website to another website in the browser

const port = process.env.port || 5000; //env file dont get uploaded on github security

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoute);
app.use("/api", userRoutes);
app.use("/api", categoryRoute);
app.use("/api", productRoute);
app.use("/api", orderRoute);
app.use("/api", paymentRoute);

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
