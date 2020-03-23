
let arr = [];
let grade;

while (let i = 0; i < 10, i++) {
    let point = prompt(Number("Please insert number"));
    if (point >= 80) {
        return grade = "A"
    } else if (point >= 70 && point <= 79) {
        grade = "B"
    } else if (point >= 60 && point <= 69) {
        grade = "C"
    } else if (point >= 50 && point <= 59) {
        grade = "D"
    } else {
        grade = "F"
    }
    return arr.push(point)
}