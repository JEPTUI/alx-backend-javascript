const http = require('http');
const { parse } = require('url');
const { countStudents } = require('./3-read_file_async')
const fs = require('fs');;

// Create a simple HTTP server
const app = http.createServer((req, res) => {
  // Parse the URL to get the pathname
  const { pathname } = parse(req.url, true);

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle different URL paths
  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const databasePath = 'database.csv';

    countStudents(databasePath)
      .then(() => {
        res.end('This is the list of our students');
      })
      .catch((error) => {
        res.end(`${error.message}`);
      });
  } else {
    // Handle unknown paths with a 404 response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
