var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// var exports = module.exports = {};


dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
});

// dbConnection.connect();

// var tablename = "messages"; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    // dbConnection.query("truncate " + tablename, done);

dbConnection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// dbConnection.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

module.exports = dbConnection;