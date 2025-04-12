const baseURL = "https://obazeec.github.io/wdd230/";
const linksURL = "https://obazeec.github.io/wdd230/data/links.json";

const weeks = document.querySelector("#weeks");

async function  getLinks(){
    const myFile = await fetch(linksURL);
    const data = await myFile.json();
    console.log(data);

    displayLinks(data.weeks); 
}
getLinks();

const displayLinks = (weeksData) => {
    weeksData.forEach((week) => {
        // Create a list item for the week
        let weekItem = document.createElement("li");
        weekItem.textContent = `${week.week}: `;

        // Create a nested unordered list for the links
        let linksList = document.createElement("ul");
        week.links.forEach((link) => {
            let listItem = document.createElement("li");
            let url = document.createElement("a");
            url.setAttribute('href', link.url);
            url.textContent = link.title;

            listItem.appendChild(url);
            linksList.appendChild(listItem);
        });

        weekItem.appendChild(linksList);
        weeks.appendChild(weekItem);
    });
};