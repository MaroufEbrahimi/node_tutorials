// creating a server
const http = require("http")

const server = http.createServer((req, res) => {
  console.log("request made")
})

// listen(portNumber, hostName, function)
server.listen(3000, "localhost", () => {
  console.log("listening on requests on port 3000")
})

// #---- localhost & port numbers ----#
// localhost is like a domain name on the web
// EX: google.com

// #-- Port numbers
// port number are like "doors" into a computer
// EX: skype on computer
