const express = require("express");
const exhbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 5000;
const apiroutes = require("./routes/api-routes")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", apiroutes);


const exbhs = require("express-handlebars");
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))