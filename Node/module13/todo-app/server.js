const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathName = url.pathname;
  //get all todos
  if (pathName === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }
  //post create todo
  else if (pathName === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      const created_at = new Date().toLocaleString();
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" }); //returns an array
      const parseData = JSON.parse(allTodos); //convert string to array
      console.log(parseData);
      parseData.push({ title, body, created_at });
      fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2), {
        encoding: "utf-8",
      });
    });
    res.end(() => {
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      JSON.stringify(allTodos);
    });
  } else if (pathName === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseData = JSON.parse(data);
    const todo = parseData.find((todo) =>
      todo.title.toLowerCase().includes(title.toLowerCase())
    );
    const stringifyTodo = JSON.stringify(todo);
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(stringifyTodo);
  } else if (pathName === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      const { body } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parsedAllTodos = JSON.parse(allTodos);

      const todoIndex = parsedAllTodos.findIndex(
        (todo) => todo.title === title
      );

      parsedAllTodos[todoIndex].body = body;

      fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(
        JSON.stringify(
          { title, body, created_at: parsedAllTodos[todoIndex].created_at },
          null,
          2
        )
      );
    });
  } else if (pathName === "/todos/delete-todo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");

    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parsedAllTodos = JSON.parse(allTodos);

    const todoIndex = parsedAllTodos.findIndex((todo) => todo.title === title);

    parsedAllTodos.splice(todoIndex, 1);

    fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
      encoding: "utf-8",
    });

    res.end("Deleted Todo Successfully");
  } else {
    res.statusCode = 404;
    res.end("404 - Route Not Found");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:8080");
});
