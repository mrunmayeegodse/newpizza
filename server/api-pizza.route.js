const express=require('express');
const app= express();
//we are importing pizza schema
let Pizza=require('./pizza');
//we are creating api link foremployee
const apiPizzaRouter = express.Router();


//get all pizza
apiPizzaRouter.route('/allPizza').get((req,resp)=>{
    //resp.send("<h1>Called  all Employees </h1>");
    //get data from mongodb
    Pizza.find((err,data)=>{
        if(err){
            resp.send("failure");
        }
        resp.send(data);
    }); 
});

//get employee by empId
apiPizzaRouter.route('/:pizzaId').get((req,resp)=>{
    //resp.send("<h1>called getby empId</h1>");
    //1.Get data from mongodb
    let p_pizzaId=req.params.pizzaId;
    Pizza.find({pizzaId:p_pizzaId},(err,data)=>{
        if(err){
            resp.send("Failure to load the data for:"+pizzaId);
        }
        resp.send(req.body);
    });
});

//get employee by pizzaName
apiPizzaRouter.route('/pizzaname/:pizzaName').get((req,resp)=>{
    resp.send("<h1>called getby pizzaName</h1>");
});

//add employee
    apiPizzaRouter.route('/addPizza').post((req,resp)=>{
    let body_pizza=new Pizza(req.body);
    //resp.send(employee);
    body_pizza.save().then(()=>resp.send("Pizza added to database"),(err)=>resp.send("Failure while adding Pizza detail"));
});



// delete employee
     apiPizzaRouter.route('/delete/:pizzaId').delete((req,resp)=>{
     resp.send("<h1>called delete by pizzaId</h1>");
     let p_pizzaId=req.params.pizzaId;
     Pizza.findOneAndDelete({pizzaId:p_pizzaId},(err,data)=>{
                if(err){ resp.send("No records found"+p_pizzaId); }
       resp.send(data+"deleted records");

 });
});

// //update employee
// apiEmpRouter.route('/update/:empId/:desig').put((req,resp)=>{
//     let p_empId=req.params.empId;
//     let p_desig=req.params.desig;
//     Employee.findOneAndUpdate({empId:p_empId},{designation:p_desig},(err,data)=>{
//     if(err){

//     resp.send("fail");  } 
//     resp.send("update records for"+p_empId+"as"+p_desig);
//     });
// });
 module.exports=apiPizzaRouter;
