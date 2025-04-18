// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDescription = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=f2657353b8d6175001ada0f90d3c3831';

//units imperial = F,mph ; metric = Celsius, m/s

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data)
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
 
}

function displayResults(data){
 //currentTemp.textContent =`${data.main.temp}F`;
 //currentTemp.textContent =`Thei si test`;
 // &deg; --> this will add the degree simbol
currentTemp.innerHTML =`${data.main.temp}&deg;F`;
const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
let desc = data.weather[0].description;
weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDescription.textContent = `${desc}`;
 
}
apiFetch();
