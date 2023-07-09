import express from "express";
import { people, products } from "./src/data/data.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const delay_func = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 1100);
};

app.get("/", delay_func, (req, res) => {
  res.send({
    success: true,
    message: "You have hit the Home route of this API",
  });
});

app.get("/api/currentuser", delay_func, (req, res) => {
  res.send({
    name: "Billy Butcher",
    age: 45,
    hairColor: "Black",
    hobbies: ["Action", "Fighting", "Strategy maker"],
  });
});

app.get("/api/user/:id", delay_func, (req, res) => {
  const { id } = req.params;
  const userId = +id;

  const user = people.find((person) => person.id === userId);
  if (!user) {
    return res.status(400).send({
      message: "No user found with this ID",
    });
  }
  return res.send(user);
});
app.get("/api/product/:id", delay_func, (req, res) => {
  const { id } = req.params;
  const userId = +id;

  const user = products.find((person) => person.id === userId);
  if (!user) {
    return res.status(400).send({
      message: "No user found with this ID",
    });
  }
  return res.send(user);
});

app.get("/api/people", delay_func, (req, res) => {
  res.status(200).send(people);
});

app.get("/api/product", delay_func, (req, res) => {
  res.status(200).send(products);
});

app.listen(6060, () => {
  console.log("Server is running at localhost:6060");
});
