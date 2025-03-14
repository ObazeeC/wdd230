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
