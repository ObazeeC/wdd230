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