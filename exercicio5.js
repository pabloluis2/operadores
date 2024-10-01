let nome = prompt("Qual é seu nome?")
let idade = Number(prompt("Qual é sua idade?"))
let anoAtual = 2024

console.log(
    "Nome:",nome,
    "\nIdade:",idade,
    "\nÉ maior de idade?", idade>=18,
    "\nIdade em 2050:",idade+(2050-2024)
)