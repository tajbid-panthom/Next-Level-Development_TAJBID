const fs = require("fs");

// let data = fs.readFileSync(
//   "/Users/mdtajbidhossainbappi/Documents/SOFTWARE B/Next-Level-Development_TAJBID/Node/module13/data.txt",
//   {
//     encoding: "utf8",
//     flag: "r",
//   }
// );
// console.log(data);
// const text = "Hello, this is a sample text for the file.";
// fs.writeFileSync("./data.txt", text);

// data = fs.readFileSync("./data.txt", { encoding: "utf8" });
// console.log(data);

// fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });
// fs.writeFile("./data.txt", "This is a new text.", "utf-8", (err) => {
//   if (err) {
//     console.error("Error writing to the file:", err);
//     return;
//   }
//   console.log("File written successfully.");
// });
// fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

const readStream = fs.createReadStream("./data.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./createData.txt", {
  encoding: "utf-8",
});

readStream.on("data", (data) => {
  writeStream.write(data, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("Data written successfully.");
  });
});

readStream.on("error", (err) => {
  console.error("Error reading the file:", err);
});
writeStream.on("error", (err) => {
  console.error("Error writing the file:", err);
});
readStream.on("end", () => {
  console.log("File reading completed.");
  writeStream.end(() => {
    console.log("File writing completed.");
  });
});

writeStream.on("finish", () => {
  console.log("All data has been written to the file.");
});
