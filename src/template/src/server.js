"use strict";

const xdome         = require("./../xdome.json");
const express       = require("express");
const compression   = require("compression");
const cors          = require("cors");
const app           = express();

// @TODO `require("./commons/accessPoints")` should be a reference to xdome-extension-rest package
let accessPoints    = new (require("./plugins/accessPoints"))(express, xdome.accessPoints),
    port            = (process.env.PORT * 1) || "3000";

app.disable("x-powered-by");
app.use(cors())
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

accessPoints.setRoutes();
app.use(xdome.basePath, accessPoints.router);

app.listen(port, "0.0.0.0", function() {
    // eslint-disable-next-line no-console
    console.log("Tu aplicación está ejecutándose en http://localhost:" + port)
});
