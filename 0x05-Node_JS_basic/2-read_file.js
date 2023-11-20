const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

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
        // Increment the count for the corresponding field
        const field = values[header.indexOf('field')];
        if (fieldCounts[field] === undefined) {
          fieldCounts[field] = 1;
        } else {
          fieldCounts[field] += 1;
        }
      }
    }

    // Log the total number of students
    console.log(`Number of students: ${lines.length - 1}`);

    // Log the number of students in each field and the list of first names
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field];
        const list = lines
          .slice(1) // Exclude the header
          .filter((line) => line.split(',')[header.indexOf('field')] === field)
          .map((line) => line.split(',')[header.indexOf('firstname')])
          .join(', ');

        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    // Handle the error if the file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
