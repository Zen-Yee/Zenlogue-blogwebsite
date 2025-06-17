import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const year = new Date().getFullYear();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const data={
        year:year
    }
    res.render("index.ejs",data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});