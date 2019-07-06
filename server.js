const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const apiPizzaRoute=require('./server/api-pizza.route');
const app=express();
const path=require('path');
//configuration of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("Database connected"),
    (err)=>console.log("Failed to connect database")
);
 //handling app static resource and api call
app.use(bodyparser.json()); //Json handling
app.use(cors());
//path.join(__dirname,'dist/my-app05')
//public:folder which contains all static resources
//.html,.jpg,.png,.css,.js}we will keep in one folder called public
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,resp)=>{
    //resp.send("welcome to express");
    resp.sendFile("index.html");
});
//to call apiEmployee route
app.use('/pizza',apiPizzaRoute);
//step 4:starting server
app.listen(4000,()=>{console.log("server listening at 4000")});
