import express, { Request, Response } from "express";

import cors from "cors";

import setupDatabase from "./db/config/syncDatabase";
import setupBasics from "./db/config/resReqConf";

import db from "./db/index.js";

const app = express();

// authorize all cors:
app.use(cors());

// syncing database based on models
setupDatabase();
// basic setup for the app: body parser and urlencoded, etc.
setupBasics(app);

// use the express-static middleware
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.send({
    message: "WELCOME TO AIRAKAZ.FR API",
  });
});

const { dbModels } = db;
app.get("/users", async (req, res) => {
  const users = await dbModels.user.findAll();

  res.send({
    users,
  });
});

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, "0.0.0.0", () =>
    console.log("Server is running on http://localhost:" + port)
  );
}

export default app;
