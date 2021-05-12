// Напишите функцию, которая переделывает строку из camelCase в snake_case.

// Например:

// solution("redevCourses") -> "redev_courses"



let solution = (str) => {
    var str = str.replace(/[A-Z]/g, function (letter) {
        return '_' + letter.toLowerCase();
      });
    return str.replace(/^_/, "");
}

console.log(solution("redevCourses"))

