// Global constants. 
const url = "https://labs.waterdata.usgs.gov/sta/v1.1/Datastreams('6cbb1ab905a94794a3f4f8030004ee30')/Observations?$top=1";

// Thank you stack overflow.
function precisionRoundMod(number, precision) {
  var factor = Math.pow(10, precision);
  var n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round( n * factor) / factor;
}

let checkTemp = async function checkTemp() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    var obj = JSON.parse(JSON.stringify(data));
    var tempC = obj.value[0].result;
    var tempF = precisionRoundMod((tempC * (1.8)) + 32, 2);
    document.getElementById("temp").innerHTML = "North Umpqua River Temp: " + tempF + " F!"
    console.log("MSG: Successful update.")
  });
}

setInterval(checkTemp(), 5000);