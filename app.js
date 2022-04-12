// 
const url = "https://waterservices.usgs.gov/nwis/iv/?sites=14319500&format=json,1.1&period=PT2H"
const temperature_data = -199;

var fetchTemp = async function fetchTemp() {
  let response = await fetch(url);
  let data = await response.text();
  console.log(data);
}

setInterval(function () {fetchTemp()}, 900000);