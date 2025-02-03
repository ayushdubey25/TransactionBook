const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
//config dotenv file
dotenv.config();

//rest objects
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user-routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transaction-routes
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

//Port
const PORT = 8081 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//database call
connectDb();
