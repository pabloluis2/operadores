let idadeUser = Number(prompt("Qual é sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo(a)?"))

console.log(
    "Sua idade é maior que a do seu(ua) melhor(a) amigo(a)?",idadeUser>idadeAmigo,
    "\nDiferença de idade:", idadeUser-idadeAmigo
)