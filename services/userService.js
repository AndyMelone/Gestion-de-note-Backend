const createConnection = require("../lib/db");

exports.saveUser = async function ({ username, password, contact }) {
  const connexion = await createConnection();
  const toInsert = contact
    ? [username, password, contact]
    : [username, password];
  const sql = contact
    ? `INSERT INTO user(username, password, contact) VALUES (?,?,?)`
    : `INSERT INTO user(username, password) VALUES (?,?)`;
  await connexion.execute(sql, toInsert);
  await connexion.end();
};

exports.authUser = async function (username) {
  const connexion = await createConnection();
  const sql = `SELECT username, password
                FROM user
                WHERE username = ?`;

  const toselct = [username];
  const [rows] = await connexion.execute(sql, toselct);
  await connexion.end();
  return rows[0];
};
