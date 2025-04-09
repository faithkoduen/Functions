function getStringLength(arr){
    return arr.map(str =>str.length);
};

function getEvenNumbers(numbers){
    return numbers.filter(num => num % 2 === 0);
}

function getTopStudents(students){
    return students
    .filter(students =>students.score >75)
    .map (students => students.name);
}

function squareNumbers(numbers){
    return numbers.map(num =>num *num);
}

function getUppeCaseString (arr){
    return arr
    .filter (item => typeOf (item ==='string'))
    .map (str => str.toUpperCase());
}