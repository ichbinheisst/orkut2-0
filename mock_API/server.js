const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { json } = require("express");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

const user = [
  {
    email: "Bruno@gmail.com",
    password: "123",
    name: "Bruno",
    id: 1,
  },
  {
    email: "Anna@gmail.com",
    password: "123",
    name: "ANNA",
    id: 2,
  },
];
const secret = "work";

function verifyJWT(req, res, next) {
  const jwt = require("jsonwebtoken");

  const token = req.headers["x-access-token"];
  
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).end();
    req.userId = decoded.userId;
    next();
  });
}

app.post("/", (req, res) => {
  const { email, password } = req.body;
  const Result = user.find((user) => {
    return user.email == email && user.password==password;
  });
  if (!Result) return res.json();

console.log(Result)  
  const id = Result.id;
  const token = jwt.sign({ userId: id }, secret, { expiresIn: 55555 });


  return res.json({ auth: true, token });
});

app.post("/checktoken", verifyJWT, (req, res) => {
  res.json({ auth: true });
});

app.get("/home", verifyJWT, (req, res) => {
  const id = req.userId;
  const result = user.find((user) => {
    return user.id == id;
  });
  res.json(result);
});

app.listen(3333, () => {
  console.log("server is on ");
});
