const apiKey = "b48f9613ade74f0e8fb155649260608";
const searchBtn = document.querySelector("#search-btn");
const inputCity = document.querySelector("#city-input");
const resultDiv = document.querySelector("#clima-info");
const toggleBtn = document.querySelector("#toggle-temp");
let isCelcius = true;
let currentTempC = 0;
let currentTempF = 0;
let currentLocation = "";
let lastData = null;
async function getWeather(city){
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;

    try{
        resultDiv.innerHTML = `
        <p style="color: black; font-size: 1.2rem;">Buscando el clima de ${city}</p>`
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok){
            throw new Error(data.error?.message || "No se pudo obtener el clima.");
        }
        /*const temp = data.current.temp_c;*/
        lastData = data;
        currentTempC = data.current.temp_c;
        currentTempF = data.current.temp_f;
        currentLocation = data.location.name;
        const humidity = data.current.humidity;
        const condition = data.current.condition.text;
        updateUI()
    } catch(error){
        console.error("el error:", error);
        resultDiv.innerHTML = `<p>No se pudo obtener el clima. Intenta con otra ciudad.</p>`;
    }
}
function updateUI(){
    const locationName = lastData.location.name;
    const humidity = lastData.current.humidity;
    const condition = lastData.current.condition.text;
    const tempDisplay = isCelcius ? currentTempC : currentTempF;
    const unit = isCelcius ? "°C" : "°F";
    const iconUrl = lastData.current.condition.icon;
    resultDiv.innerHTML = `
        <h2>Clima en ${lastData.location.name}</h2>
        <p>Temperatura: ${tempDisplay}${unit}</p>
        <p>Humedad: ${humidity}</p>
        <p>Condicion: ${condition}</p>
        <img src="${iconUrl}" alt="Icono del Clima"/>
        `;
}
searchBtn.addEventListener("click",() =>{
    const city = inputCity.value.trim();//trim es para evitar espacios al ingresar el dato.
    if (city){
        getWeather(city);
    }else{
        alert("Por favor ingresa una ciudad.")
    }
});
toggleBtn.addEventListener("click", ()=>{
    isCelcius = !isCelcius;
    toggleBtn.textContent = isCelcius ? "Cambiar a °F" : "Cambiar a °C";
    if (lastData){
        updateUI();
    }
})