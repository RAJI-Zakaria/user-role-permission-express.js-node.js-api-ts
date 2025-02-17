import express from "express";
import nocache from "nocache";
// get morgan
import morgan from "morgan";

import * as core from "express-serve-static-core";

const setupBasics = (app: core.Express) => {
  app.use("/api", express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.disable("etag");
  app.set("trust proxy", true);
  app.use(nocache());
  app.use(morgan("combined"));
};

export default setupBasics;
