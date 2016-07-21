var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require("body-parser");


var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

var connection = new Sequelize(
'combo-logger-db', '', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

var Character = connection.define('character', {
  name: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});


console.log("Listening on port 3000");

app.post("/", function(req, res){
  Character.sync({force: true}).then(function () {
    // Table created
    return Character.create({
      name: req.body.name,
      img: req.body.img
    });
  }).then(function(char){
    res.send(char)
  })
})

app.listen(3000);
