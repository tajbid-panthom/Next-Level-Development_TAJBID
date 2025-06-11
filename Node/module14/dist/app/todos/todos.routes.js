"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
const todosRouter = express_1.default.Router();
todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = mongodb_1.client.db("todosDB");
    const collection = db.collection("todos");
    const todos = yield collection.find({}).toArray();
    res.json(todos);
}));
todosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = mongodb_1.client.db("todosDB");
    const collection = db.collection("todos");
    yield collection.insertOne({
        title,
        description,
        priority,
        isCompleted: false,
    });
    const todos = yield collection.find({}).toArray();
    res.json(todos);
}));
todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const db = mongodb_1.client.db("todosDB");
    const collection = db.collection("todos");
    const todos = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todos);
}));
todosRouter.patch("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { description } = req.body;
    const db = mongodb_1.client.db("todosDB");
    const collection = db.collection("todos");
    yield collection.findOneAndUpdate({ _id: new mongodb_2.ObjectId(id) }, {
        $set: {
            description,
        },
    });
    const todos = yield collection.find({}).toArray();
    res.json(todos);
}));
todosRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const db = mongodb_1.client.db("todosDB");
    const collection = db.collection("todos");
    yield collection.findOneAndDelete({ _id: new mongodb_2.ObjectId(id) });
    const todos = yield collection.find({}).toArray();
    res.json(todos);
}));
exports.default = todosRouter;
