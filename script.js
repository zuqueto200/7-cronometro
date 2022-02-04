
let marcador_s = 0;
let marcador_m = 0;
let marcador_h = 0;
let trava = true;
const ms = document.getElementById('display_s')
const mm = document.getElementById('display_m')
const mh = document.getElementById('display_h')
const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const pausa = document.getElementById('pausa')

iniciar.addEventListener('click', function () { trava = false })
parar.addEventListener('click', function () { ms.textContent = "00"; marcador_s = 0; marcador_m = 0; marcador_h = 0; })
pausa.addEventListener('click', function () { trava = true })
setInterval(m, 10)

function m() {

    if (trava === false) { marcador_s++; }

    if (ms.textContent < 9) {
        ms.textContent = "0" + marcador_s
    } else {
        if (marcador_s < 100) { ms.textContent = marcador_s } else {
            ms.textContent = "00"
            marcador_s = 0
            marcador_m++
        }
    }
    if (mm.textContent < 10) {
        mm.textContent = "0" + marcador_m
    } else {
        if (marcador_m < 60) { mm.textContent = marcador_m } else {
            mm.textContent = "00"
            marcador_m = 0
            marcador_h++
        }
    }
    if (mh.textContent < 10) {
        mh.textContent = "0" + marcador_h
    } else {
        if (marcador_h < 60) { mh.textContent = marcador_h } else {
            mh.textContent = "00"
            marcador_h = 0
        }
    }
}