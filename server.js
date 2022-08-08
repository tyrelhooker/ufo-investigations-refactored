//Server.js is the initial point for the Node/Express server.//

//Dependencies.//
const express=require("express");
const bodyParser=require("body-parser");
const env=require('dotenv');
const path = require('path');
//Setting up Express App.//
const app=express();
const PORT=process.env.PORT || 7000;

//Requiring models for syncing.//
const db=require("./models");

//Sets up the Express app to handle data parsing.//

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes.//
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// Static directory/this should come after our routes
console.log(__dirname);
app.use('/public',express.static("public"));

//Syncing sequelize models and starting Express app.//
db.sequelize.sync({force:false}).then(function(){
  app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
  });
});