
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData(){
const response = await fetch(url);
const data = await response.json();

console.table(data.prophets); // temporary testinf of data retreival
displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object

}

// Define a function that handles a single para name prophets

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const section = document.createElement('section');
        const fullName = document.createElement('h2');
        const DOB = document.createElement('p');
        const POB = document.createElement('p');
        const portrait = document.createElement('img');

        // build the h2 content out to show the prohet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        DOB.textContent = `Date of Birth : ${prophet.birthdate} `;
        POB.textContent = `Place of Birth : ${prophet.birthplace} `;

        //build the image portrait by setting the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`) ;
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        //Append the h2 and portrait to the section
        section.appendChild(fullName);
        section.appendChild(DOB);
        section.appendChild(POB);
        section.appendChild(portrait);

        // append the section to the div element ( card )
        cards.appendChild(section);



    }) ;

}

// call the function

getProphetData();

