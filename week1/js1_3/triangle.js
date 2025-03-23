function classifyTriangle() {
    let side1 = parseFloat(prompt("Enter length of side 1:"));
    let side2 = parseFloat(prompt("Enter length of side 2:"));
    let side3 = parseFloat(prompt("Enter length of side 3:"));
    
    let result = "";

    if (side1 === side2 && side2 === side3) {
        result = "Equilateral Triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        result = "Isosceles Triangle";
    } else {
        result = "Scalene Triangle";
    }

    document.getElementById("result").innerHTML = result;
}
