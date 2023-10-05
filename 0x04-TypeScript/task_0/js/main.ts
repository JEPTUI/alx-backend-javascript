interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Bob",
  lastName: "Lee",
  age: 18,
  location: "Tokyo",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Kam",
  age: 20,
  location: "Seoul",
  };

const studentsList: Student[] = [student1, student2];

// create HTML table
const table = document.createElement("table");

// create table header row
const headerRow = table.insertRow(0);
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

for (let i = 0; i < studentsList.length; i++) {
  const student = studentsList[i];
  const row = table.insertRow(i + 1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(0);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
}

document.body.appendChild(table);
