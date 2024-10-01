let consumo = Number(prompt("Informe o consumo da residencia em quilowatt-hora:"))
let desconto = Number(prompt("Informe o percentual de desconto a ser aplicado na fatura:"))/100
let valorFaturaBruto = consumo*0.05
let valorFaturaLiquido = valorFaturaBruto*(1-desconto)

console.log(
    "O valor bruto da fatura é:", valorFaturaBruto,
    "\nO Valor da fatura após o desconto é:", valorFaturaLiquido
)