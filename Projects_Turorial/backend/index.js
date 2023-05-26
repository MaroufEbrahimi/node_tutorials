import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fam##00%%",
})

app.use(express.json())

app.get("/", (req, res) => {
  res.json("hi, this is home page")
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"
  const values = [
    "title form backend",
    "desc form backend",
    "cover picture form backend",
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8800, () => {
  console.log("connected to backend")
})
