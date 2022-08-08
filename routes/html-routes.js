//html-routes.js-Offers a set of routes for sending users to the various html pages.//

//Dependencies.//
const path=require("path");

//Routes.//
module.exports=function(app){
  
//Below routes handles the HTML page that the user gets sent to.//

//Index route loads index.html.//
  app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"../index.html"));
  });
// Route to the game page.//
  app.get("/game",function(req, res){
    res.sendFile(path.join(__dirname,"../game.html"));
  });
};