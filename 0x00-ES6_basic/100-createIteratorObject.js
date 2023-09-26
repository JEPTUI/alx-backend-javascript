export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employeeIndex = 0;
  let departmentIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (departmentIndex >= departments.length) {
            return { done: true };
          }

          const employees = departments[departmentIndex];
          const employee = employees[employeeIndex];

          employeeIndex++;

          if (employeeIndex >= employees.length) {
            employeeIndex = 0;
            departmentIndex++;
          }

          return { value: employee, done: false };
        },
      };
    },
  };
}
