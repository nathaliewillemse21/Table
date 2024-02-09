
const PORT = 4000;
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // Read the JSON file
  fs.readFile('data.json', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    const jsonData = JSON.parse(data);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonData));
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
   

