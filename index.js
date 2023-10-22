const express =  require('express');
const app = express();



// dot env

require('dotenv').config();




// mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ubola:ps9353@cluster0.mhcoau9.mongodb.net/ubola');
mongoose.connection.once('open',()=>{

    console.log('mongoose connected');

});

mongoose.connection.on('error',()=>{
    console.log("mongoose  connection failed"+error);
});


// routes 


const userRoute = require('./route/UserRoute');

app.use('/api',userRoute);




// app.use('/',(req,res)=>{

//     res.send('Home page');

// });






// server 

app.listen(process.env.PORT,()=>{
    console.log(`Server is runing on ${process.env.PORT}`);
});
