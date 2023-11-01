const express= require("express");
let app = express();
const port = 6722;
const mongoose=require("mongoose");
const bodyParser = require("body-parser")
const morgan = require("morgan");
//const UserAgent = require('user-agents');
const {LogModel}=require('./models/dBstuff');

//console.log(userAgent.toString());

//middleware
app.use(bodyParser.json())
app.use(express.json());
app.use(morgan("tiny"));
app.use((req, res, next) => {
    const user = new LogModel(req.body);
  user.save()
    .then(() => {
      console.log('payload saved successfully');
      next();
    })
    .catch((err) => {
      console.error('Error saving user data:', err);
      return res.status(500).send('Error saving user data');
  });
  
  });

const myRouters=require('./routers/routers');
app.use('/api/assignment',myRouters);




mongoose.connect('mongodb+srv://joshq:EPysQUMkROqqQrPk@cluster0.1sy3gyw.mongodb.net/',{ useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ASSIGNMENT'})
.then(()=>{
    console.log("database connected");
});
//models





  
  





app.listen(port,()=>{
console.log("active");
})