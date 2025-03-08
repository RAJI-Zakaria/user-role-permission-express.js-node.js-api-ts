import express, { Request, Response } from "express";

import cors from "cors";

import setupDatabase from "./db/config/syncDatabase";
import setupBasics from "./db/config/resReqConf";

import routes from "./routes";

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

// use the routes
app.use("/api", routes);

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, "0.0.0.0", () =>
    console.log("Server is running on http://localhost:" + port)
  );
}

export default app;
