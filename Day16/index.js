// const express = require('express');
// const app = express();
// const port = 3000;
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.get('/about',(req,res) => 
// {
//     res.send(JSON.stringify({page : "About", message : "This is about page"}));
// });

// app.get('/login',(req,res) => 
// {
//     res.send(JSON.stringify({page : "Login", message : "This is login page"}));
// });

// // const about = ((req,res) =>
// // {
// //     return{"page":"About","message":"This is about page"};
// // });
// // app.use('/about',about);

// app.listen(port, ()=>
// {
//     console.log(`Example app listening at http://localhost:${port}`);
// });
// Import Statements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes.js');
const HttpError = require('./utils/http-error');
const use = require('./routes/user-routes');

// Configuration statements
const port = 3001;
app.use(bodyParser.json());


// Routing
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

//Error Handling
app.use((req,res,next) => {
  const error = new HttpError('Page not found',404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({message: error.message || 'Unknown error occured' , code: error.code });
});



// Methods
// app.get('/about', (req, res) => {
//   res.send(JSON.stringify({page: "About", message: "This is the about page"}));
// });

// app.post('/login',(req, res) => {
//   res.send({page: "Login", message: "Please submit your credentials!!"});
// });
app.listen(port, ()=>
{
    console.log(`Example app listening at http://localhost:${port}`);
});
/*
mongoose.connect('mongodb+srv://Anshul-Ray:<password>@cluster0.dfwt1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') 
({  useUnifiedTopology : true,
    useNewUrlParser : true
}).then(()=> {
    app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
}).catch(err => {
    console.log(err);
});*/