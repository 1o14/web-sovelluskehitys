function sumNaturalNumbers() {
    let number = parseInt(prompt("Enter a positive integer:"));
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    document.getElementById("result").innerHTML = `Sum of natural numbers up to ${number}: ${sum}`;
}
