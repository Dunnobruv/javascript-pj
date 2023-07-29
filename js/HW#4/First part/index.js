const C = +prompt ("Enter Celcius")

function CtoF(C) {
    const F1 = C * 9 / 5
    return F1 + 32 
}

document.write(CtoF(C))