const express = require('express');
const { countStudents } = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the /students path
app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then(() => {
      res.send('This is the list of our students');
    })
    .catch((error) => {
      res.send(`${error.message}\n`);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
