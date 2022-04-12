// Global constants. 
//const url = "https://waterservices.usgs.gov/nwis/iv/?format=json,1.1&sites=14319500&parameterCd=00010&siteStatus=active"
const url = "https://catfact.ninja/fact";
const temperature_data = -199;

let checkTemp = async function checkTemp() {
  // fetch() returns a Promise, use then() and catch() methods
  // to handle it.
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.fact);
  //alert(data.fact);
}