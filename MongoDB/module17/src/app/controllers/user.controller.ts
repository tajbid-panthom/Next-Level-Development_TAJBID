import { Request, Response, Router } from "express";
import { User } from "../models/user.model";

export const userRouter = Router();

//create user
userRouter.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create(body);

  res.status(201).json({
    message: "User Created Successfully",
    success: true,
    user,
  });
});
//get all users
userRouter.get("/", async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(201).json({
    message: "Users Retrieved Successfully",
    success: true,
    users,
  });
});
//get a single users
userRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id);

  res.status(201).json({
    message: "User Retrieved Successfully",
    success: true,
    user,
  });
});
userRouter.patch("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const user = await User.findByIdAndUpdate(id, body, { new: true });

  res.status(201).json({
    message: "User updated Successfully",
    success: true,
    user,
  });
});
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  res.status(201).json({
    message: "User deleted Successfully",
    success: true,
    user,
  });
});
