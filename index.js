const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {checkToken} = require("./utils/jwt")
const addRouter = require('./routes/add')
const loginRouter = require('./routes/login')
const viewRouter = require('./routes/view')
const updateRouter = require('./routes/update')
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


app.use(bodyParser.json(),(err,req,res,next) => {
  if(err)
    res.sendStatus(400)
  else
    next()
})


// Login Route
app.use("/login", loginRouter)

// Middle ware to check for valid jwt token
app.use(checkToken)


// add admin or user route
app.use("/add",addRouter)

// view admin or user route
app.use("/view",viewRouter)

// update admin or user route
app.use("/update",updateRouter)