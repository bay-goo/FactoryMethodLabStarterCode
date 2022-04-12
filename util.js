// 
//const url = "https://waterservices.usgs.gov/nwis/iv/?format=json,1.1&sites=14319500&parameterCd=00010&siteStatus=active"
const url = "https://catfact.ninja/docs/api-docs.json/fact";
const temperature_data = -199;

let fetchTemp = async function fetchTemp() {
  let response = await fetch(url , {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
  let data = await response.json();
  return data;
}

fetchTemp().then(data => console.log(data));