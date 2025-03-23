function convertTemperature() {
    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    document.getElementById("result").innerHTML = `
        Temperature in Fahrenheit: ${fahrenheit} °F <br>
        Temperature in Kelvin: ${kelvin} K
    `;
}
