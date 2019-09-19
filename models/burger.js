var orm = require("./config/orm.js");


orm.select("burger_name", "burgers");


orm.select("devoured");


orm.selectAll("burgers", "burger-name");