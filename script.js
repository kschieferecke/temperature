//this is how the number transfers from F to C
function temperatureConverterFC(valNum) { // this code is naming a function, and calling the "temperature Converter" and applying a number
    valNum = parseFloat(valNum); //this is how the computer analyzes the HTML and the user inputs
    document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8; //this is the equation for F to C
  }
function temperatureConverterCF(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}