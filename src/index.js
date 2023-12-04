let heroi = "wolfgang amadeus"
let XP = 10009
const texto = "O herói de nome " + heroi + " está no nível "

if (XP <= 99) {
    console.log("O herói de nome " + heroi + " ainda não tem rank")
    }

if (XP > 100 && XP <= 1000){
        console.log (texto + "ferro")
} 

if (XP >= 1001 && XP <= 2000){
        console.log (texto + "bronze")
}

if (XP >= 2001 && XP <= 5000){
        console.log (texto + "prata")
}
if (XP >= 6001 && XP <= 7000){
    console.log(texto + "ouro")
}
if (XP >= 7001 && XP <= 8000){
    console.log(texto + "platina")
}
if (XP >= 8001 && XP <= 9000){
    console.log(texto + "ascendente")
}
if (XP >= 9001 && XP <= 10000){
    console.log(texto + "imortal")
}
if (XP >= 10001){
    console.log(texto + "radiante")
}