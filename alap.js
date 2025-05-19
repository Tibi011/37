fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x=>x.json())
.then(y=>megjelenitUSD(y))

function megjelenitUSD(y){
    console.log(y)

    document.getElementById("usd").innerHTML=y.rates.HUF+" FT"
}



fetch("https://api.exchangerate-api.com/v4/latest/euro")
.then(x=>x.json())
.then(y=>megjelenitEURO(y))



function megjelenitEURO(y){
    console.log(y)

    document.getElementById("euro").innerHTML=y.rates.HUF+" FT"
}


fetch("https://api.exchangerate-api.com/v4/latest/ggp")
.then(x=>x.json())
.then(y=>megjelenitGGP(y))



function megjelenitGGP(y){
    console.log(y)

    document.getElementById("ggp").innerHTML=y.rates.HUF+" FT"
}

fetch("https://api.exchangerate-api.com/v4/latest/ron")
.then(x=>x.json())
.then(y=>megjelenitRON(y))



function megjelenitRON(y){
    console.log(y)

    document.getElementById("ron").innerHTML=y.rates.HUF+" FT"
}