const EmployeeUtils = {
    
    highestPaid: function (employees) {
        return employees.reduce((highest, employee) => {
            return employee.salary > highest.salary ? employee : highest;
        });
    },

    destructuringToSwap: function (employees) {
        if (employees.length >= 2) {
           
            [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
        }
        return employees;
    }
};

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

console.log(EmployeeUtils.highestPaid(employees));


console.log(EmployeeUtils.destructuringToSwap(employees));
