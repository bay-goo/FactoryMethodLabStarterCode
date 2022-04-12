// Global constants. 
//const url = "https://waterservices.usgs.gov/nwis/iv/?format=json,1.1&sites=14319500&parameterCd=00010&siteStatus=active"
const url = "https://labs.waterdata.usgs.gov/sta/v1.1/Things('USGS-14319500')";
const temperature_data = -199;

let checkTemp = async function checkTemp() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}