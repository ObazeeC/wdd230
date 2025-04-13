
const base = "https://obazeec.github.io/wdd230/";
const url = "https://obazeec.github.io/wdd230/chamber/data/members.json";
const card = document.querySelector('#cont');

async function getBusinessData(){
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.businesses);
  try{

    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();

        //console.table(data.businesses);
        displayBusiness(data.businesses);

    }else{
        throw Error(await response.text());
    }
  }catch(error){
    console.log(error);
  }

  }




const displayBusiness = (businesses)=>{
    businesses.forEach((business) => {
    const section = document.createElement('section');
    const bName = document.createElement('h2');
    const address = document.createElement('p');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    const membership = document.createElement('p');
    const url = document.createElement('a');
    const logo = document.createElement('img');

    // the logo
    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `${business.name} logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '160');
    logo.setAttribute('height', '150');

    // the address
    address.textContent = `Address: ${business.addresses}`;
    // the email
    email.textContent = `Email : ${business.email}`;

    // the phone
    phone.textContent = `Phone : ${business.phone}`;
    //the url
    url.setAttribute('href', business.url);
    url.textContent = business.title;

    //
    membership.textContent = `Membership : ${business.membership}`;
    // the name
    bName.textContent = `${business.name}`;
    
  // appends to section for each business
    section.appendChild(logo);
    section.appendChild(bName);
    section.appendChild(url);
    section.appendChild(address);
    section.appendChild(email);
    section.appendChild(phone);
    section.appendChild(membership);
   

    // appends sections to the div
    card.appendChild(section);
    })
}

getBusinessData();


