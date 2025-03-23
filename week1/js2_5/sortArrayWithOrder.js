function sortArrayWithOrder() {
    let numbers = [5, 2, 8, 1, 9];

    function sortArray(numbers, order) {
        return numbers.slice().sort((a, b) => order === 'asc' ? a - b : b - a);
    }

    console.log("Sorted Array Ascending:", sortArray(numbers, 'asc'));
    console.log("Sorted Array Descending:", sortArray(numbers, 'desc'));

    document.getElementById("result").innerHTML = `
        Sorted Array Ascending: ${sortArray(numbers, 'asc')}<br>
        Sorted Array Descending: ${sortArray(numbers, 'desc')}
    `;
}
