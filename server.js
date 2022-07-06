
// import statements?
const http = require('http')
const fs = require('fs')

// make a server var
var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('homepage.html').pipe(res)
  })

server.listen(process.env.PORT || 8080)