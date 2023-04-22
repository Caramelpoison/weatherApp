let myApi = '954ac9048e6bc29d7314bec53e412173';

function zipCodeGrabber(){
   let zipCode = document.getElementById('zipCode').value;
   return zipCode;
}

function link(){
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeGrabber()}&appid=${myApi}&units=imperial`;
    return apiLink;
}

function dataGrabber() {
    fetch(link())
    .then((response) => response.json())
    .then((json) => {
        showCity(json.name);
        showDate(new Date(json.dt * 1000).toLocaleDateString());
        showForecast(json.weather[0].description);
        showCT(json.main.temp);
        showLT(json.main.temp_min);
        showHT(json.main.temp_max);
    });
}


function showCity(wData){
    const showC = document.getElementById("locationName");
    showC.innerHTML = wData;
}


function showForecast(wData){
    const showF = document.getElementById("Current");
    showF.innerHTML = wData;
}



function showDate(wData){
    const showD = document.getElementById("date");
    showD.innerHTML = wData;
}


function showCT(wData){
    const showT = document.getElementById("Ctemp");
    showT.innerHTML = wData + "°F";
}



function showLT(wData){
    const showM = document.getElementById("lo");
    showM.innerHTML = "Low of " + wData + "°F";
}



function showHT(wData){
    const showM = document.getElementById("hi");
    showM.innerHTML = "High of " + wData + "°F";
}


let submitbutton= document.getElementById("submit");
submitbutton.addEventListener("click", event => {
    event.preventDefault();
    dataGrabber();
    document.getElementById("zipCode").value = "";
});
