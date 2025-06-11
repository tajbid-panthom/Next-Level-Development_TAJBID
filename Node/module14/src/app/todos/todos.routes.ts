import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";
const todosRouter = express.Router();
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = client.db("todosDB");
  const collection = db.collection("todos");
  const todos = await collection.find({}).toArray();
  res.json(todos);
});
todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;
  const db = client.db("todosDB");
  const collection = db.collection("todos");
  await collection.insertOne({
    title,
    description,
    priority,
    isCompleted: false,
  });

  const todos = await collection.find({}).toArray();

  res.json(todos);
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = client.db("todosDB");
  const collection = db.collection("todos");
  const todos = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todos);
});
todosRouter.patch("/update-todo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;
  const db = client.db("todosDB");
  const collection = db.collection("todos");
  await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        description,
      },
    }
  );
  const todos = await collection.find({}).toArray();
  res.json(todos);
});
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const db = client.db("todosDB");
  const collection = db.collection("todos");
  await collection.findOneAndDelete({ _id: new ObjectId(id) });
  const todos = await collection.find({}).toArray();
  res.json(todos);
});

export default todosRouter;
