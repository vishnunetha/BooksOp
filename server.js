//importing node packages
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();
const port = process.env.PORT;

//mongoDB connection
const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log(`connected to mongo successfully...`);
}).catch((err)=>{
    console.log(err);
})

//importing routes
const indexRouter = require("./routes/index");


//setting viewengine,views,layout,static
app.set("view engine", "ejs");
app.set("views",__dirname+"/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

//Routing

app.use('/', indexRouter);

app.listen(port|| 3000, ()=>{
    console.log(`listening to server at ${port}`)
});