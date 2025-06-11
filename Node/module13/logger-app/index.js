const fs = require("fs");
const path = require("path");

const inputarguments = process.argv.slice(2);
const data = inputarguments.join(" ");
const timeStamp = new Date().toISOString();
let text = `${data} - ${timeStamp}\n`;
if (!text) {
  console.error("No data provided to write to log.txt");
  console.log("Usage: node index.js <data to log>");
  process.exit(1);
}

const fileName = path.join(__dirname, "log.txt");
console.log(fileName);
const writeStream = fs.createWriteStream("log.txt", {
  flags: "a", // 'a' means appending (old data will be preserved)
  encoding: "utf8",
  mode: 0o666, // file permission
});
writeStream.write(text);
writeStream.end();
writeStream.on("finish", () => {
  console.log("Data written to log.txt successfully.");
});
writeStream.on("error", (err) => {
  console.error("Error writing to log.txt:", err);
});
