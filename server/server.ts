import * as express from "express";
import * as bodyParser from "body-parser";
import * as fs from "fs";
import * as yaml from "js-yaml";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/data", (req, res) => {
  try {
    const data = req.body;
    const yamlStr = yaml.dump(data);
    fs.writeFileSync("data.yaml", yamlStr, "utf8");
    res.status(200).send({ message: "Data stored successfully" });
  } catch (e) {
    console.log("THIS IS AN ERR:", e);
  }
});

app.get("/data", (req, res) => {
  try {
    const fileContents = fs.readFileSync("data.yaml", "utf8");
    const data = yaml.load(fileContents);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ error: "Error reading data", details: e.message });
  }
});

app.post("/clear", (req, res) => {
  fs.writeFileSync("data.yaml", "", "utf8");
  res.status(200).send({ message: "YAML file cleared successfully" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
