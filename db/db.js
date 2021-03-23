const mysql = require("mysql");
const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
	host: "localhost",

	// Your port
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "Fakefake323!!",
	database: "employee_trackerDB",
});

connection.connect(function(err) {
	if (err) throw err;
	// console.log("connected as id " + connection.threadId);
});

module.exports = connection;