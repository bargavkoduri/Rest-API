const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const addRouter = require('./routes/add')
const PORT = 5000;
const app = express();

mongoose.connect(
  "mongodb+srv://bargavkoduri:express@firstcluster.mz7kvza.mongodb.net/Assignment?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => {
    app.listen(PORT, () => console.log(`Server Running Successfully ${PORT}`));
    console.log("Connnected to database");
});


app.use(bodyParser.json())
app.use(cookieParser())


app.use("/add",addRouter)