function generateTable() {
    let number = parseInt(prompt("Enter a positive integer:"));
    let resultHtml = "<h2>Multiplication Table</h2><table border='1'>";
    
    for (let i = 1; i <= number; i++) {
        resultHtml += "<tr>";
        for (let j = 1; j <= number; j++) {
            resultHtml += `<td>${i * j}</td>`;
        }
        resultHtml += "</tr>";
    }
    
    resultHtml += "</table>";
    
    document.getElementById("result").innerHTML = resultHtml;
}
