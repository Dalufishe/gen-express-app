import express, { NextFunction, Request, Response } from "express";
import path from "path";
import createError, { HttpError } from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { dirname } from "dirname-filename-esm";

import usersRouter from "./routers/users";

// app
const app = express();

// view engine setup
app.set("views", path.join(dirname(import.meta), "views"));
app.set("view engine", "hbs");

// plugins
app.use(logger(process.env.NODE_ENV === "production" ? "common" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirname(import.meta), "../", "public")));

/** You write your code here */

// routers
app.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
app.use("/users", usersRouter);

/** You write your code here */

// error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use(
  (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
);

export default app;
