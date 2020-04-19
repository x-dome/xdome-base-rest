"use strict";

let express         = require("express"),
    compression     = require("compression"),
    bodyParser      = require("body-parser"),
    cors            = require("cors"),
    app             = express(),
    accessPoints    = new (require("./commons/accessPoints"))(express, [{"name":"test"}]),
    port            = (process.env.PORT * 1) || "3000";

app.disable("x-powered-by");
app.use(cors())
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

accessPoints.setRoutes();
app.use(accessPoints.router);

app.listen(port, "0.0.0.0", function() {});
