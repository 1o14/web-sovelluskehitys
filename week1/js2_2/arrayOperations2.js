function arrayOperations() {
    let numbers = [];

    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt(`Enter Number ${i + 1}:`));
        numbers.push(num);
    }

    console.log("Numbers:", numbers);
    document.getElementById("result").innerHTML = `Numbers: ${numbers}`;

    let searchNum = parseInt(prompt("Enter a Number to Search:"));
    if (numbers.includes(searchNum)) {
        console.log(`Number ${searchNum} is found in the array.`);
        document.getElementById("result").innerHTML += `<br>Number ${searchNum} is found in the array.`;
    } else {
        console.log(`Number ${searchNum} is not found in the array.`);
        document.getElementById("result").innerHTML += `<br>Number ${searchNum} is not found in the array.`;
    }

    numbers.pop();
    console.log("Updated Numbers:", numbers);
    document.getElementById("result").innerHTML += `<br>Updated Numbers: ${numbers}`;

    numbers.sort((a, b) => a - b);
    console.log("Sorted Numbers:", numbers);
    document.getElementById("result").innerHTML += `<br>Sorted Numbers: ${numbers}`;
}
