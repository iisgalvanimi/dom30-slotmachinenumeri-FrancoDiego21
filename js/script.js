const btn = document.getElementById("btnStart").addEventListener("click", startGame)
const element01 = document.getElementById("d1")
const element02 = document.getElementById("d0")
const mess = document.getElementById("message")
let tentativi = 3
let inter


function startGame() {
    tentativi = 3
    inter = setInterval(gioca, 1000)
}

function gioca() {
    if (tentativi > 0) {
        element01.innerText = Math.trunc(Math.random() * 4)
        element02.innerText = Math.trunc(Math.random() * 4)
        tentativi = tentativi - 1;
        mess.innerText = tentativi;
    }

    if (tentativi == 0) {

        if (element01.innerText == element02.innerText) {

            mess.innerText = "Hai Vinto, Complimenti"
            clearInterval(inter)
        } else {
            mess.innerText = "Hai Perso, SPIAZEEEEEEE"
            clearInterval(inter)
        }

    }

}