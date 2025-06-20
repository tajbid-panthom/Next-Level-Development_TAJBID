import { Request, Response, Router } from "express";
import { User } from "../models/user.model";
import { z } from "zod";

export const userRouter = Router();

const CreateUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

//create user
userRouter.post("/create-user", async (req: Request, res: Response) => {
  try {
    // const body = await CreateUserZodSchema.parseAsync(req.body);
    const body = req.body;
    // const password = await bcrypt.hash(req.body.password, 10);
    // body.password = password;
    // const user = await User.create(body);

    // const password = await User.hashPassword(body.password);
    // body.password = password;
    const user = await User.create(body);

    // console.log(body);

    // const user = new User(body);
    // const password = await user.hashPassword(body.password);
    // user.password = password;
    // await user.save();

    res.status(201).json({
      message: "User Created Successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "User not Created Successfully",
      success: false,
    });
  }
});
//get all users
userRouter.get("/", async (req: Request, res: Response) => {
  const userEmail = req.query.email;
  // const users = await User.find({ email: userEmail });
  // const users = await User.find().sort({ email: -1 });
  // const users = await User.find().skip(2);
  const users = await User.find().limit(2);

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
