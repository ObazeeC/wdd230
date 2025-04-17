const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDescription = document.querySelector('#description');
const url ="https://api.openweathermap.org/data/2.5/weather?lat=45.47&lon=9.18&units=metric&appid=f2657353b8d6175001ada0f90d3c3831";

async function getAPI(){
    const api = await fetch(url);
    const jData = await api.json();
    displayResult(jData);
    //console.log(jData);
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

getAPI();

// get the members       <div class="spotlight"></div>
const base = "https://obazeec.github.io/wdd230/";
const memberURL = "https://obazeec.github.io/wdd230/chamber/data/members.json";
const card = document.querySelector('.spotlight');


async function fetchMemData(){
    const response = await fetch(memberURL);
    const data = await response.json();
    console.log(data.businesses);
    try{
  
      const response = await fetch(memberURL);
      if(response.ok){
          const data = await response.json();
  
          //console.table(data.businesses);
          //displayData(data.businesses);
          displayData(data.businesses);
  
      }else{
          throw Error(await response.text());
      }
    }catch(error){
      console.log(error);
    }
  
    }
  

    const displayData = (businessName) => {
    businessName.forEach((business) => {
       // const member = business.membership;
      
            if(business.membership == "Silver" || business.membership == "Gold"){
            const section = document.createElement('section');

            const bName = document.createElement('h2');
            const address = document.createElement('p');
            const url = document.createElement('a');
            const logo = document.createElement('img');

            logo.setAttribute('src', business.image);
            logo.setAttribute('alt', business.name);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '160');
            logo.setAttribute('height', '150');

            address.textContent = `Address: ${business.addresses}`;
            url.setAttribute('href', business.url);
            url.textContent = business.title;
            bName.textContent = `${business.name}`;

            section.appendChild(logo);
            section.appendChild(bName);
            section.appendChild(address);
            section.appendChild(url);

            card.appendChild(section);

        }
    })
}


    fetchMemData();
