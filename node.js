const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop_db"
});

app.post("/register", async (req,res)=>{
  const hash = await bcrypt.hash(req.body.password,10);
  db.query(
    "INSERT INTO users (email,password) VALUES (?,?)",
    [req.body.email, hash],
    ()=>res.send("ok")
  );
});

app.post("/login", (req, res) => {
  db.query("SELECT * FROM users WHERE email = ?", [req.body.email], async (err, result) => {
      if (err) return res.send("fail");
      if (!result[0]) return res.send("fail");
      
      const match = await bcrypt.compare(req.body.password, result[0].password);
      if (match) {
          const token = jwt.sign({ id: result[0].id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
          res.cookie('token', token, { 
              httpOnly: true, 
              secure: true, 
              sameSite: 'strict',
              maxAge: 3600000 
          });
          return res.send("success");
      }
      res.send("fail");
  });
});

const isAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Unauthorized");
  
  jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
      if (err) return res.status(401).send("Unauthorized");
      db.query("SELECT role FROM users WHERE id = ?", [decoded.id], (e, r) => {
          if (e || !r[0] || r[0].role !== 'admin') {
              return res.status(403).send("Forbidden");
          }
          req.userId = decoded.id;
          next();
      });
  });
};

app.post("/admin/add-product", isAdmin, (req, res) => {
  db.query("INSERT INTO products (name, price, image) VALUES (?, ?, ?)", 
  [req.body.name, req.body.price, req.body.image], (err) => {
      if (err) return res.send("fail");
      res.send("success");
  });
});

app.listen(3000);
