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
const todos_routes_1 = __importDefault(require("./todos/todos.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.default);
app.get("/", (req, res, next) => {
    console.log("I am middleware");
    next();
}, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("Tajbid World");
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            error,
        });
    }
}));
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("Tajbid World");
    }
    catch (error) {
        next(error);
    }
}));
app.use((req, res, next) => {
    res.status(404).json({
        message: " Route Not Found",
    });
});
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong from the server globally error",
            error,
        });
    }
});
exports.default = app;
/**
 * server - server handling like : starting, closing, listening, error handling only related to server
 * app - routing handle, middleware, route related error handling only related to app
 * app folder - app business logic handling like create read update delete database related work
 * middleware - request handling like authentication, authorization, logging, error handling, etc.
 * router - routing handle like get, post, put, delete, etc.
 * controller - controller handling like business logic handling like create read update delete database related work
 * model - model handling like database related
 */
