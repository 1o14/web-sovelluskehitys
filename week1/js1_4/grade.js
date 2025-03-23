function determineGrade() {
    let score = parseInt(prompt("Enter your score (0-100):"));

    let grade = "";
    
    if (score >= 0 && score <= 39) {
        grade = "Grade: 0";
    } else if (score >= 40 && score <= 51) {
        grade = "Grade: 1";
    } else if (score >= 52 && score <= 63) {
        grade = "Grade: 2";
    } else if (score >= 64 && score <= 75) {
        grade = "Grade: 3";
    } else if (score >= 76 && score <= 87) {
        grade = "Grade: 4";
    } else if (score >= 88 && score <= 100) {
        grade = "Grade: 5";
    } else {
        grade = "Invalid score. Please enter a value between 0 and 100.";
    }

    document.getElementById("result").innerHTML = grade;
}
