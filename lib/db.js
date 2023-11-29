// get the client
const mysql = require("mysql2/promise");

// create the connection to database
module.exports = async function () {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mynote",
    port: 8889,
    password: "root",
  });
};
