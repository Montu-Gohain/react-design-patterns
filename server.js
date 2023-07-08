import express from "express";
import { people, products } from "./src/data/data.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "You have hit the Home route of this API",
  });
});

app.get("/api/currentuser", (req, res) => {
  setTimeout(() => {
    res.send({
      name: "Billy Butcher",
      age: 45,
      hairColor: "Black",
      hobbies: ["Action", "Fighting", "Strategy maker"],
    });
  }, 1500);
});

app.get("/api/people", (req, res) => {
  res.status(200).send(people);
});

app.get("/api/product", (req, res) => {
  res.status(200).send(products);
});

app.listen(6060, () => {
  console.log("Server is running at localhost:6060");
});
