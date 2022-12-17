var urlAllCoins = 'https://api.coingecko.com/api/v3/coins'
var url = 'https://api.coingecko.com/api/v3/coins/'
var coins = []
var singleCoin = []

AllCoins()




function AllCoins() {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: urlAllCoins,
        success: function (data) {
            coins = data
            printCoinsAll()
        },
        error: function (error) {
            console.log('error : ', error)
        },
    })
}


function onSubmit(val) {
    console.log('SUBMIT : ', val,)
    userInputValue = coinInputDV.value
    navDV()
    navbarDV.innerHTML = ''

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url + val,
        success: function (data) {
            singleCoin = data
            printSingleCoin(singleCoin)
        },
        error: function (error) {
            console.log('error : ', error)
        },
    })
}


let navbarDV = "";

function navDV() {
    navbarDV = document.createElement("div");
    navbarDV.innerHTML = (`
    <nav class="navbar navbar-expand-lg bg-clear">
    <div class="container-fluid">
        <a class="navbar-brand" href="project.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" id="liveReports" href="#"" onclick="showChart()">Live Reports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="About()">About</a>
                </li>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2 coinInputDV" type="search" id="coinInputDV"
                    placeholder="Search" aria-label="Search">
                <button class="btn btn-success coinInputDV" type="button"
                    onclick="onSubmit(coinInputDV.value)">Search</button>
            </form>
        </div>
    </div>
</nav>

    `)
    navbarDV.className = "navbarDV"
    document.body.appendChild(navbarDV)

}


function printCoinsAll() {
    for (var i = 0; i < coins.length; i++) {
        printCoin(coins[i])
    }

}

// function printSingleCoin() {
//     for (var i = 0; i < coins.length; i++) {
//         printCoin(coins[i].coin)
//     }

// }

function printCoin(coin) {
    let IdName = "cardID" + coin.id
    coinContainer.innerHTML += `
    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
    <div class="card">
    <div class="card-body">
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck" onchange="toggleSelect()">
    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
    <div class="card-title" id="cardTitle">${coin.symbol} <img class="card-img" id="coinImg" src="${coin.image.thumb}" style="width:50px; height:50px;">
    </div>
    </div>
    <div>
    <div class="card-text">${coin.name}</div><br>
    <button class="btn btn-primary" type="" data-bs-toggle="collapse" data-bs-target="#${IdName}">more info</button>
    <div class="collapse" id="${IdName}"><br>
    <img class="card-img" id="coinImg" src="${coin.image.thumb}" style="float:right; width:70px; height:70px;">
    <div><strong>USD :</strong> ${coin.market_data.current_price.usd} $</div>
    <div><strong>EUR :</strong> ${coin.market_data.current_price.eur} €</div>
    <div><strong>ILS :</strong> ${coin.market_data.current_price.ils} ₪</div>
    </div>
    </div>
    </div>
    </div> 
`
}


function printSingleCoin(coin) {
    let IdName = "cardID" + coin.id
    let index = coin.name
    coinContainer.innerHTML = `
    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
    <div class="card">
    <div class="card-body">
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck" onchange="toggleSelect()">
    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
    <div class="card-title" id="cardTitle">${coin.symbol} <img class="card-img" id="coinImg" src="${coin.image.thumb}" style="width:50px; height:50px;">
    </div>
    </div>
    <div>
    <div class="card-text">${coin.name}</div><br>
    <button class="btn btn-primary" type="" data-bs-toggle="collapse" data-bs-target="#${IdName}">more info</button>
    <div class="collapse" id="${IdName}"><br>
    <img class="card-img" id="coinImg" src="${coin.image.thumb}" style="float:right; width:70px; height:70px;">
    <div><strong>USD :</strong> ${coin.market_data.current_price.usd} $</div>
    <div><strong>EUR :</strong> ${coin.market_data.current_price.eur} €</div>
    <div><strong>ILS :</strong> ${coin.market_data.current_price.ils} ₪</div>
    </div>
    </div>
    </div>
    </div> 
`
    console.log(IdName)
}





function About() {
    coinContainer.innerHTML = `
    <div id="AboutInfo" >    
    <div style="margin-top:20px;" ><h4>About Me</h4></div> 
    <div>my name is Ron Shushan and this is my ajax project !</div>
    </div>
    `

}

function showChart() {
    var chart = new CanvasJS.Chart('coinContainer', {
        animationEnabled: true,
        title: {
            text: 'My Coins',
        },
        axisX: {
            valueFormatString: 'DD MMM,YY',
        },
        axisY: {
            title: 'Coin value',
            suffix: '$',
        },
        legend: {
            cursor: 'pointer',
            fontSize: 16,
            itemclick: toggleDataSeries,
        },
        toolTip: {
            shared: true,
        },
        data: [{
            name: 'OB1',
            type: 'spline',
            yValueFormatString: '#0.## $',
            showInLegend: true,
            dataPoints: [{
                x: new Date(2017, 6, 4),
                y: 1800
            }, {
                x: new Date(2017, 6, 5),
                y: 1800
            }, {
                x: new Date(2017, 6, 6),
                y: 1825
            }, {
                x: new Date(2017, 6, 7),
                y: 1827
            }, {
                x: new Date(2017, 6, 8),
                y: 1835
            }, {
                x: new Date(2017, 6, 9),
                y: 1845
            }, {
                x: new Date(2017, 6, 10),
                y: 1857
            },],
        },],
    })
    chart.render()
    addToGraph()

    function toggleDataSeries(e) {
        if (
            typeof e.dataSeries.visible === 'undefined' ||
            e.dataSeries.visible
        ) {
            e.dataSeries.visible = false
        } else {
            e.dataSeries.visible = true
        }
        chart.render()
    }

    function addToGraph() {
        let Y = 1900
        let Day = 11

        setInterval(function () {
            var date = new Date()
            var minutes = date.getMinutes()
            var hour = date.getHours()

            let ob = {
                x: new Date(2017, 6, Day),
                y: Y,
            }

            chart.data[0].dataPoints.push(ob)
            chart.render()
            Y += 100
            Day++
            console.log('C : ', chart.data[0].dataPoints)
        }, 2000)
    }
}



