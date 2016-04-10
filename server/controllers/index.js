var models = require('../models');
var bluebird = require('bluebird');
var connection = require('../db')



module.exports = {
  messages: {
    get: function (req, res) {
      // console.log("this is our connection",connection)
      connection.query("SELECT * FROM messages", function(err, rows){
        console.log('test:', rows);
      })
res.end("finished")
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req, "from post messages")
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req, 'from users get')
    },
    post: function (req, res) {
      console.log(req, 'from post users')
    }
  }
};

