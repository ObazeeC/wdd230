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
const para = document.getElementById('greetings');
//para.textContent = "Good day programmer";
const lastVisit = localStorage.getItem('Lvisit');
const currentDate = new Date();
const currentTime = currentDate.getTime();

// check if this is the user's first visit
if(!lastVisit){
    para.textContent= "Welcome! Let us know if you have any question.";
}else{
    const lastVisitTime = new Date(lastVisit).getTime();
    const timeDifference = currentTime - lastVisitTime;
    //Call the difference in time between visits in milliseconds
    // Use math.floor to round result to the nearest whole number
    const daysDifference = Math.floor(timeDifference / (1000 * 60 *60 *24));
    if(daysDifference < 1){
        para.textContent = "Back so soon Awesome!";
    }else if(daysDifference ===1){
        para.textContent="You last visited 1 day ago!";
    }else{
        para.textContent = "you last visited ${daysDifference} days ago";
    }
}
//Update the last visit date in localStorage to the current date
localStorage.setItem('Lvisit', currentDate);



