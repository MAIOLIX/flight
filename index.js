const fs = require('fs');
var airportCodes = [];
var airportNames = [];
var airportcode = 'X';

function loadAirport(next) {
    fs.readFile('./datas/airports.json', (err, data) => {
        if (err) throw err;
        let airportObj = JSON.parse(data);
        airportObj.airports.forEach(item => {
            airportCodes.push(item.fs);
            airportNames.push(item.name.toString().toLowerCase());

        });
        next(); //console.log(airports);

    })

}
function searchAirport(stringa, callback) {
    stringa = stringa.toString().toLowerCase();
    let appo = '';
    let matches = airportNames.filter(s => s.includes(stringa));
    let indexCode = airportNames.indexOf(matches.toString());
    appo = airportCodes[indexCode];
    if (callback && typeof callback === "function") {
        appo = callback(appo);
    }
    /*fs.readFile('./datas/airports.json', (err, data) => {
            if (err) throw err;
            let airportObj = JSON.parse(data);
            airportObj.airports.forEach(item => {
                airportCodes.push(item.fs);
                airportNames.push(item.name.toString().toLowerCase());

            });
            let matches = airportNames.filter(s => s.includes(stringa));
            let indexCode = airportNames.indexOf(matches.toString());
            appo = airportCodes[indexCode];
            airportcode = airportCodes[indexCode];
            //console.log('APPO==>' + appo);
            //next(); //console.log(airports);
            if (callback && typeof callback === "function") {
                appo = callback(appo);
            }
    })*/
    
   
    return appo;
}
function saluto(nome, cognome, callback) {
    console.log('Ciao ' + nome + ' ' + cognome);
    if (callback && typeof callback === 'function') callback();   
}

//saluto('Mario', 'Rossi', function () {
//    console.log('Sei il benvenuto!');
//});


//searchAirport("fiumicino");
loadAirport(searchAirport("fiumicino"));


//console.log("MAIN",searchAirport("fiumicino"));
//searchIATA("FCO");