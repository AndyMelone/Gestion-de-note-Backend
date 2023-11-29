const express = require("express");
const userRoute = require("./Routes/userRoute");
const noteRoute = require("./Routes/userNote");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello word");
});

app.use("/user", userRoute);
app.use("/notes", noteRoute);

app.listen(8080, () => {
  console.log("app is listen on localhost:8080");
});
