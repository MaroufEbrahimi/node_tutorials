const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === "/") {
    res.setHeader("Content-Type", "text/html")
    const form = `
      <form method="POST" action="/products">
        <input type="text" name="product" />
        <button type="submit">Add Product</button>
      </form>
    `
    res.write(form)
    return res.end()
  }
  if (url === "/products" && method === "POST") {
    const items = []
    req.on("data", (data) => {
      items.push(data)
    })
    req.on("end", () => {
      const parseData = Buffer.concat(items).toString()
      const product = parseData.split("=")[1]
      fs.writeFileSync("new.txt", product)
    })
    res.statusCode = 302
    res.setHeader("Location", "/")
    return res.end()
  }

  res.setHeader("Content-Type", "text/html")
  res.write("<h2>Not Found</h2>")
  res.end()
})
server.listen(8000)
