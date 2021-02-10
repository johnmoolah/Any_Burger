const express = require("express");
const connection = require("../config/connection");
const router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM burgers", (err, data) => {
        console.log(result)
        if (err) {
            console.log(err);
        } else
        console.log("queried", data)
    });
    res.render("index", { burger_data: ["burger", "more"]});
});

module.exports = router;