function arrayOperations() {
    // Initial fruits array
    let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    
    console.log("Fruits:", fruits);
    console.log("Length of Fruits:", fruits.length);
    console.log("Element at Index 2:", fruits[2]);
    console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

    // Empty vegetables array and user input
    let vegetables = [];
    for (let i = 0; i < 3; i++) {
        let vegetable = prompt(`Enter vegetable ${i + 1}:`);
        vegetables.push(vegetable);
    }

    console.log("Vegetables:", vegetables);
    console.log("Length of Vegetables:", vegetables.length);

    document.getElementById("result").innerHTML = `
        Fruits: ${fruits}<br>
        Length of Fruits: ${fruits.length}<br>
        Element at Index 2: ${fruits[2]}<br>
        Last Element of Fruits: ${fruits[fruits.length - 1]}<br>
        Vegetables: ${vegetables}<br>
        Length of Vegetables: ${vegetables.length}
    `;
}
