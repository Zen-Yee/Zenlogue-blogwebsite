import express from "express";
import fs from "fs";

const app = express();
const port = 3000;
const year = new Date().getFullYear();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile("./posts.json", "utf8", (err, jsonData) => {
    if (err) {
      console.error("Error reading JSON:", err);
      return res.status(500).send("Error reading data");
    }
    const posts = JSON.parse(jsonData);
    const data = {
      year: year,
      post: posts,
    };
    res.render("index.ejs", data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
