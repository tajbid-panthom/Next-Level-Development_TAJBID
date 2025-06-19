import { Request, Response, Router } from "express";
import { Note } from "../models/notes.model";
export const notesRouter = Router();
notesRouter.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  //approach 1
  //   const myNote = new Note({
  //     title: "Learning express",
  //     tags: {
  //       label: "database",
  //     },
  //   });
  // await myNote.save();

  //approach 2
  const note = await Note.create(body);

  res.status(201).json({
    message: "Note Created Successfully",
    success: true,
    note,
  });
});
notesRouter.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find({});

  res.status(201).json({
    message: "Notes Retrieved Successfully",
    success: true,
    notes,
  });
});
notesRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const note = await Note.findById(id);

  res.status(201).json({
    message: "Note Retrieved Successfully",
    success: true,
    note,
  });
});
notesRouter.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find({});

  res.status(201).json({
    message: "Notes Retrieved Successfully",
    success: true,
    notes,
  });
});
notesRouter.patch("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const note = await Note.findByIdAndUpdate(id, body, { new: true });

  res.status(201).json({
    message: "Note Updated Successfully",
    success: true,
    note,
  });
});
notesRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const note = await Note.findByIdAndDelete(id);

  res.status(201).json({
    message: "Note Deleted Successfully",
    success: true,
    note,
  });
});
