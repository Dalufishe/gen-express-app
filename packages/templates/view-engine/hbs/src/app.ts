import express, { Application, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { dirname } from "dirname-filename-esm";

import usersRouter from "./routers/users";

// app
const app: Application = express();

// view engine setup
app.set("views", path.join(dirname(import.meta), "views"));
app.set("view engine", "hbs");

// plugins
app.use(logger(process.env.NODE_ENV === "production" ? "common" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirname(import.meta), "../", "public")));

// routers
app.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Express" });
});
app.use("/users", usersRouter);

export default app;
