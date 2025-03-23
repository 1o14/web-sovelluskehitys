function sortArray() {
    let numbers = [5, 2, 8, 1, 9];

    console.log("Original Array:", numbers);
    let sortedArray = numbers.slice().sort((a, b) => a - b);
    console.log("Sorted Array:", sortedArray);

    document.getElementById("result").innerHTML = `
        Original Array: ${numbers}<br>
        Sorted Array: ${sortedArray}
    `;
}
