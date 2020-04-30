"use strict";

const xdome         = require("./../xdome.json");
const express       = require("express");
const compression   = require("compression");
const bodyParser    = require("body-parser");
const cors          = require("cors");
const app           = express();

// @TODO `require("./commons/accessPoints")` should be a reference to xdome-extension-rest package
let accessPoints    = new (require("./commons/accessPoints"))(express, xdome.accessPoints),
    port            = (process.env.PORT * 1) || "3000";

app.disable("x-powered-by");
app.use(cors())
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

accessPoints.setRoutes();
app.use(accessPoints.router);

app.listen(port, "0.0.0.0", function() {});
