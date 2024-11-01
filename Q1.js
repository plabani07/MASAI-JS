function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables];
    return groceries;
}

function cloningObjects(person) {
    const personCopy = { ...person };
    return personCopy;
}

function mergingObjects(student, course) {
    const studentWithCourse = { ...student, ...course };
    return studentWithCourse;
}

function combiningNestedArrays(array1, array2) {
    const combinedArray = [...array1, ...array2];
    return combinedArray;
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables));

const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person));

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course));

const array1 = [[1, 2], [3, 4], [5, 6]];
const array2 = [[7, 8], [9, 10], [11, 12]];
console.log(combiningNestedArrays(array1, array2));
