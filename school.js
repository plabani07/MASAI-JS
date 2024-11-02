const SchoolUtils = {
    countCalculation: function(school) {
        const {
            departments: {
                math: { teachers: mathTeachersCount, students: mathStudentsCount },
                history: { teachers: historyTeachersCount, students: historyStudentsCount }
            }
        } = school;

        return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
    },

    findTopStudent: function(school, courseName) {
        const { students } = school;

        let topStudent = students.reduce((highest, student) => {
            return student.scores[courseName] > (highest.scores[courseName] || 0) ? student : highest;
        });

        return topStudent;
    },

    addNewDept: function(school, newDepartment) {
        return {
            ...school,
            departments: {
                ...school.departments,
                ...newDepartment
            }
        };
    },

    highestStudentCountDepartment: function(school) {
        const { departments } = school;

        let maxDept = '';
        let maxStudents = 0;

        for (let dept in departments) {
            const { students } = departments[dept];
            if (students > maxStudents) {
                maxStudents = students;
                maxDept = dept;
            }
        }

        return maxDept;
    },

    generateGreeting: function(name, language = "English") {
        const greetings = {
            English: "Hello",
            Spanish: "¡Hola",
            French: "Bonjour"
        };

        return `${greetings[language]}, ${name}!;`
    }
};

const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 }
    },
    courses: ["math", "science", "history", "english"],
    students: [
        { name: "Alice", className: "Grade 5", scores: { math: 95, science: 88, history: 85, english: 92 } },
        { name: "Bob", className: "Grade 4", scores: { math: 80, science: 78, history: 92, english: 85 } },
        { name: "Charlie", className: "Grade 5", scores: { math: 88, science: 90, history: 78, english: 88 } },
        { name: "Diana", className: "Grade 4", scores: { math: 92, science: 85, history: 88, english: 90 } }
    ]
};

console.log(SchoolUtils.countCalculation(school));


console.log(SchoolUtils.findTopStudent(school, "math"));


const newDepartment = { art: { teachers: 2, students: 50 } };
console.log(SchoolUtils.addNewDept(school, newDepartment));

console.log(SchoolUtils.highestStudentCountDepartment(school));

console.log(SchoolUtils.generateGreeting("Alice"));

console.log(SchoolUtils.generateGreeting("Bob", "Spanish"));

console.log(SchoolUtils.generateGreeting("Charlie", "French"));
