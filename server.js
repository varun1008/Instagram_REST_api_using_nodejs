const   express = require("express"),
        mongoose        = require("mongoose"),
        bodyParser      = require("body-parser"),
        expressLayouts  = require("express-ejs-layouts")

const indexroute = require("./routes/index")

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true })); 
app.use(expressLayouts); 
app.use(express.static(__dirname + "/public"));
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');         


app.use("/api" , indexroute)


app.listen(process.env.PORT  || 3000 , process.env.IP , function(){
    console.log("Server Started......")
})