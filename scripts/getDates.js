/*
This will print out the day of the day of week , month and year. in the format
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('getYear').textContent = new Date().toLocaleDateString('en-US', options);
*/
const date = new Date();
let year = date.getFullYear();
document.getElementById('getYear').textContent = year;

let modify = document.lastModified;
document.getElementById('lastModified').textContent = modify;

// Hamburger menu
const mainnav = document.querySelector('.navbody');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
mainnav.classList.toggle('show');
hambutton.classList.toggle('show');
});

// toggle the page black or white
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("blac")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "blac";
	}
});

// use local storage to get number of visit

const visits = document.querySelector(".visit");

let numberOfVisits = Number(window.localStorage.getItem("visit-key")) || 0;
if(numberOfVisits !== 0){
	visits.textContent = numberOfVisits;
}else{
	visits.textContent = `Your first visit. Benvenuto !`;
}
numberOfVisits++;

localStorage.setItem("visit-key", numberOfVisits);

// Weather API

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDescription = document.querySelector('#description');


/*
currentTemp.textContent = "test";
captionDescription.textContent = "test";
*/


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.34&lon=5.599&units=metric&appid=f2657353b8d6175001ada0f90d3c3831';
async function fetchAPI(){
	try{
		const response = await fetch(url);
		if(response.ok){
			const data = await response.json();
			console.log(data); // test result
            displayResult(data);
			//work with data here ...

		}else{
			throw Error(await response.text());
		}
	}catch(error){
		console.log(error);
	}
}
function displayResult(data){
	currentTemp.innerHTML = `${data.main.temp}&deg;C`;
	const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	let desc = data.weather[0].description;
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	weatherIcon.setAttribute('width','40');
	weatherIcon.setAttribute('height','40')
	weatherIcon.setAttribute('loading','lazy')
	captionDescription.textContent = `${desc}`;
	
}
fetchAPI();







