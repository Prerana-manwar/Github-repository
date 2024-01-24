var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "app"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to server!");
  var sql = "INSERT INTO info (Id, Name) VALUES ('1', 'John')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record is inserted!!");
  });
});