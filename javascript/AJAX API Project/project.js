let baseUrl = 'https://api.coingecko.com/api/v3/coins'
let coins = []
let currentCoin = {}

callAjax(printCoinsToHtml, 0)

function callAjax(_function, id = 0) {
    //let url = id == 0 ? baseUrl : baseUrl + '/' + id
    let url

    if (id == 0) {
        url = baseUrl
    } else {
        url = baseUrl
    }

    //"http://api.tvmaze.com/coins"
    //"http://api.tvmaze.com/coins/9"

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        success: function (data) {
            _function(data)
        },
        error: function (error) {
            console.log('error : ', error)
        },
    })
}

function printCoinsToHtml(data) {
    coins = data
    coins.map((coin) => {
        let str = `
        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div class="card" style='margin-top: 70px; width:320px; height:190px;'>
        <div class="card-body">
        <div class="form-check form-switch SwitchCheck">
        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        <div class="card-title" id="cardTitle">${coin.symbol} <img class="card-img" id="coinImg" src="${coin.image.thumb}" style=width:50px; height:50px;>
        </div>
        </div>
        <p class="card-text">${coin.name}</p>
        <a href="#" class="btn btn-primary" onClick="SingleCoin()">Go somewhere</a>
        </div>
        </div>

        
    `

        coinDV.innerHTML += str
    })

    console.log('coins : ', coins)
}




function printToHtml() {
    coinDV.innerHTML = ("my name is Ron Shushan and this in my Ajax project")
    coinDV.className = "mainDvClass"
    document.body.appendChild(coinDV)

}