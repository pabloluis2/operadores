console.log(
    "77°F ->",(77 - 32)*(5/9) + 273.15,"K",
    "\n80°C ->",(80)*(9/5) + 32,"°F",
    "\n30°C ->",(30)*(9/5) + 32,"°F e",((30)*(9/5) + 32 - 32)*(5/9) + 273.15,"K"
)
let temp = Number(prompt("Informe uma temperatura em Celcius para converção em Kelvin e Fahrenheit"))
console.log(
    temp,"°C ->",(temp)*(9/5) + 32,"°F e",((temp)*(9/5) + 32 - 32)*(5/9) + 273.15,"K"
)