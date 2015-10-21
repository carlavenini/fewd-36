var pyA = document.querySelector('.py-a');
var pyB = document.querySelector('.py-b');
var pyC = document.querySelector('.py-c');

pyA.addEventListener('keyup', calcPy);
pyB.addEventListener('keyup', calcPy);

function calcPy(event) {
  if (pyA.value.length > 0 && pyB.value.length > 0) {
    pyC.value = calcLongestSide(pyA.value, pyB.value)
  } else {
    pyC.value = '';
  }
}






var r = document.querySelector('.circum-r');
var c = document.querySelector('.circum-c');

r.addEventListener('keyup', calcC);

function calcC(event) {
  if (r.value.length > 0) {
    c.value = 3.14 * (r.value * r.value);

}
}






var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcFahrenheitToCelcius (fahrenheit){
  var celsius = (fahrenheit - 32) * 5/9;
        return celsius;

}

function calcCelsToFahr (celsius) {
        var farh = celsius * (9/5) + 32;
        return farh;
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFahrenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}