const APIURL = "https://corona.lmao.ninja/v2/countries/india";

async function getRecords(url) {
    const response = await fetch(url);
    const resData = await response.json();
    // console.log(resData);
    showRecords(resData);
}

getRecords(APIURL);

function showRecords(record){
     console.log(record);
    document.getElementById("main").innerHTML = 
    `
    <h2 class = "cases">Cases</h2>
    <div>
    <h3 class = "cases">Total-Cases</h3>
    <div class = "color">${record.cases}</div>
    </div>
    <div>
    <h3 class = "cases">Cases-Per-milion</h3>
    <div class = "color">${record.casesPerOneMillion}</div>
    </div>
    <div>
    <h3 class = "cases">Cases-Reported-Today</h3>
    <div class = "color">${record.todayCases}</div>
    </div>
    <h2 class = "cases">Recovered-Cases</h2>
    <div>
    <h3 class = "cases">Total-Cases</h3>
    <div class = "color">${record.recovered}</div>
    </div>
    <div>
    <h3 class = "cases">Recoverd-Cases-Per-Milion</h3>
    <div class = "color">${record.recoveredPerOneMillion}></div>
    </div>
    <div>
    <h3 class = "cases">Deaths-Cases-Reported-Today</h3>
    <div class = "color">${record.deaths}</div>
    </div>
    `
}