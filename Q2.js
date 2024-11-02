const EmployeeUtils = {
 
    employeeInformation: function (employees) {
        const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
        return { secondEmployeeName, secondEmployeeDepartment };
    },

    averageSalary: function (employees) {
        let totalSalary = 0;
        for (const { salary } of employees) {
            totalSalary += salary;
        }
        return totalSalary / employees.length;
    },

    thirdEmployeeInfo: function (employees) {
        const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees[2];
        const bonus = thirdEmployeeSalary * 0.10;
        return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
    }
};

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

console.log(EmployeeUtils.employeeInformation(employees));


console.log(EmployeeUtils.averageSalary(employees));


console.log(EmployeeUtils.thirdEmployeeInfo(employees));
