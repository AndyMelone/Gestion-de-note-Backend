const bcrypt = require("bcrypt");

const { saveUser, authUser } = require("../services/userService");
const e = require("express");
const { use } = require("../Routes/userRoute");

exports.createNewuser = async function (req, res) {
  try {
    const { username, password, contact } = req.body;

    if (!username || !password) {
      res.status(400);
      throw new Error("Username or password is not defined");
    }
    const passwordCrypte = await bcrypt.hash(password, 10);
    await saveUser({ username, password: passwordCrypte, contact }).catch(
      (e) => {
        res.status(400);
        throw e;
      }
    );
    res.json({
      ok: true,
    });
  } catch (e) {
    res.json({
      ok: false,
      message: e.message,
    });
  }
};

exports.authUserController = async function (req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400);
      throw e;
    }

    const row = await authUser(username).catch((e) => {
      res.status(400);
      throw e;
    });

    if (!row) {
      res.status(400);
      throw new Error("echec d'authentifaction");
    }
    const passwordCompare = await bcrypt.compare(password, row.password);

    passwordCompare
      ? res.status(200).json({ message: "connecté" })
      : res.status(400).json({ message: "authenntificatio echoué" });
  } catch (e) {
    res.json({
      ok: false,
      message: e.message,
    });
  }
};
