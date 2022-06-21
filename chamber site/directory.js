const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl 
//and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


//json data fetch

const requestURL =  "./directory.json"
const card = document.querySelector('cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displaycompanies);
    });

function displaycompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let Website = document.createElement('a');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let memlevel = document.createElement('h4')

    // Change the textContent property of the h2 element to contain the company name
    h2.textContent = `${company.name} `;

    // Change the textContent property of the p element to contain the company address and website  
    address.textContent = `Address - ${company.address}`;
    Website.textContent= `More Details`;
    phone.textContent=`Phone - ${company.phone}`;
    memlevel.textContent= `Membership Level - ${company.membershipLevel}`;

    // Build the images attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropiate variable).
    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `logo of  ${company.name} ${company.address} - ${company.membershipLevel} Membeship level.`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', 500);
    logo.setAttribute('height',300);

    // build websiete link attributes
    Website.setAttribute('href',`${company.websiteURLs}`)


    //  Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(Website);
    card.appendChild(memlevel);
    

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('article.cards').appendChild(card);

};