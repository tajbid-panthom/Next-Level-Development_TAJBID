import express, { Application, NextFunction, Request, Response } from "express";
import todosRouter from "./todos/todos.routes";
const app: Application = express();
app.use(express.json());
app.use("/todos", todosRouter);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("I am middleware");
    next();
  },
  async (req: Request, res: Response) => {
    try {
      res.send("Tajbid World");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
        error,
      });
    }
  }
);
app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Tajbid World");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: " Route Not Found",
  });
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong from the server globally error",
      error,
    });
  }
});

export default app;

/**
 * server - server handling like : starting, closing, listening, error handling only related to server
 * app - routing handle, middleware, route related error handling only related to app
 * app folder - app business logic handling like create read update delete database related work
 * middleware - request handling like authentication, authorization, logging, error handling, etc.
 * router - routing handle like get, post, put, delete, etc.
 * controller - controller handling like business logic handling like create read update delete database related work
 * model - model handling like database related
 */
