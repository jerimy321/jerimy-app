const path = require("path");
const express = require("express");
const routes = require("./routes/index");
const app = express();

var router = express.Router();

router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/about", function (req, res) {
  res.render("about", { title: "Hello World!" });
});

app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist"))
);

app.use("/", router);

module.exports = app;
