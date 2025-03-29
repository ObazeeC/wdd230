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

//Scripts for the range
const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("rng");
// Range event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue(){
	rangeValue.innerHTML = range.value;
}


// display error message for password

const psw1 = document.querySelector("#passw01");
const psw2 = document.querySelector("#passw02");
const message = document.querySelector("#fmessage");

psw2.addEventListener("focusout", checkSame);

function checkSame(){
	if(psw1.value !== psw2.value){
		message.textContent = "❗ password do not  match";
		message.style.visibility = "show";
	
		psw2.value="";
		psw2.focus();
	}else{
		message.style.display = "none";
		psw2.style.backgroundColor = "#fff";
		psw2.style.color = "#000";
	}
}