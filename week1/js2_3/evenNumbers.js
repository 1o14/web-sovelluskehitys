function extractEvenNumbers() {
    let numbers = [];
    let evenNumbers = [];
    
    while (true) {
        let input = prompt("Enter a number (or 'done' to finish):");
        if (input.toLowerCase() === 'done') break;
        
        let num = parseInt(input);
        numbers.push(num);
    }

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    console.log("Even Numbers:", evenNumbers);
    document.getElementById("result").innerHTML = `Even Numbers: ${evenNumbers.length ? evenNumbers.join(", ") : "None"}`;
}
