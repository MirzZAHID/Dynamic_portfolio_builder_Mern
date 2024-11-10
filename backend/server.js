const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
var jwt = require("jsonwebtoken");
const fetch = require("./fetch");
const JWT_SECRET = "Hello World"
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        // MySQL error code for duplicate entry violation
        return res.status(409).json({ error: 'Email already exists' });
      } else {
        // Handle other errors
        console.error("Error executing SQL query:", err);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }
    return res.status(200).json(data);
  });
});


app.post('/login', [
  check('email', "Email length error").isEmail().isLength({ min: 10, max: 30 }),
  check('password', "Password length 8-10").isLength({ min: 8, max: 10 })
], (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json(errors);
    } else {
      if (err) {
        return res.json("Error");
      }
      if (data.length > 0) {
        const payload = {
          user: {
            id: data[0].id,
          },
        };
        const authToken = jwt.sign(payload, JWT_SECRET);
        // console.log(data[0].id)
        return res.status(200).send({message:"Success",token:authToken,user:data});
      } else {
        return res.json("Fail");
      }
    }
  });
});



app.get('/account',fetch, (req, res) => {
  const userId = req.user.id;

  const sql = "SELECT * FROM login WHERE id = ?";
  db.query(sql, [userId], (err, data) => {
    if (err) {
      console.error("Error retrieving user account information:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (data.length > 0) {
      // User found, send account information
      const user = data[0]; // Assuming user data is stored in the first element of the array
      const accountInfo = {
        id: user.id,
        email: user.email,
        name:user.name
        // Include other account information you want to expose
      };
      return res.status(200).send({accountInfo});
    } else {
      // User not found
      return res.status(404).json({ error: "User not found" });
    }
  });
});

app.get('/users', (req, res) => {
  console.log("hehe")
  const sql = "SELECT * FROM login";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error retrieving users:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(data)

    if (data.length > 0) {
      // Users found, send user information
      const users = data.map(user => ({
        id: user.id,
        email: user.email,
        name: user.name,
        role:user.role&&user.role
        // Include other user information you want to expose
      }));
      return res.status(200).send({ users });
    } else {
      // No users found
      return res.status(404).json({ error: "No users found" });
    }
  });
});


app.listen(8081, () => {
  console.log("Listening on port 8081");
});
