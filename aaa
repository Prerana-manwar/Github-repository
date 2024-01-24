var mysql=require('mysql');

var conn=mysql.createConnection({ host:"localhost", user:"root", password:"123456", database:"mydb"
});

conn.connect(function(err){ if(err)
throw err;
console.log("Database is Connected!");
var sql= "INSERT INTO employee (name, address) VALUES ?";

var VALUES =[ ['Dhoni','Ranchi'],
['Virat','Delhi'],
['Shreyash','Mumbai'],
['Rohit','Mumbai']
];

conn.query(sql,[VALUES],function(err,result){ if(err)
throw err;
console.log("Number of Records are inserted");
});
});


var http=require('http'); http.createServer(function(req,res)
{
res.write("Hello World"); res.end();
}
).listen(8080);