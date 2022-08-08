// Requiring our models.//
const db=require("../models");

//Route for getting all players in the db.//
module.exports=function(app){
//GET route for getting all of the teams.//
  app.get("/api", function(req, res){
  //findAll returns all entries for a table when used with no options.//
    db.user.findAll({}).then(function(results){
//We have access to the aliens as an argument inside of the callback function.//
      res.json(results);
      console.log(results);
    });
  });

//GET route for getting the top 5 players by win count.//
  app.get("/api/topfive", function(req, res){
    db.user.findAll(
      {
        order: [['wins', 'DESC'],],
        limit: 5
      }
    ).then(function(results){
      res.json(results);
    });
  });

//POST route for creating new user.//
  app.post("/api/new", function(req,res){
    console.log(req.body);
    db.user
      .create({
        userName: req.body.name,
        email: req.body.email,
        wins: req.body.wins,
        losses: req.body.losses
      })
      .then(function(results){
        res.json(results);
      });
  });

 //Post route updating wins & losses & track user stats by email at the end of the game.//
  app.post("/api/email", function(req,res){
    let wins;
    let losses;
    db.user
      .findOne({
        where:{
          email:req.body.email
        }
      })
      .then(function(res){
        console.log(req.body.wins);
        wins=res.wins;
        losses=res.losses;
        if (req.body.wins==="1"){
          wins++;
        }else{
          losses++;
        }
        db.user.update(
          {
            wins:wins,
            losses:losses
          },
          {
            where:{
              email:req.body.email
            }
          }
        );
      });
  });
  app.get("/api/:email", function(req, res){
    db.user.findAll({
      where: {
        email: req.params.email
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};