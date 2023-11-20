const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // Split the data into lines and remove empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Get the header to determine the fields
        const header = lines[0].split(',');

        // Create an object to store the counts for each field
        const fieldCounts = {};

        // Loop through each line (excluding the header)
        for (let i = 1; i < lines.length; i += 1) {
          const values = lines[i].split(',');

          // Check if the line has the expected number of fields
          if (values.length === header.length) {
            const field = values[header.indexOf('field')];
            fieldCounts[field] = (fieldCounts[field] || 0) + 1;
          }
        }
        console.log(`Number of students: ${lines.length - 1}`);

        for (const field in fieldCounts) {
          if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
            const count = fieldCounts[field];
            const list = lines
              .slice(1)
              .filter((line) => line.split(',')[header.indexOf('field')] === field)
              .map((line) => line.split(',')[header.indexOf('firstname')])
              .join(', ');

            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
