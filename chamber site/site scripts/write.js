// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("#span"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;




// date and time 
const date = document.querySelector("#lastupdate");
try {
    const currentTime = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    date.innerHTML = new Date().toLocaleDateString('en-UK', currentTime);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }




//hamburger
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("open");
  document.querySelector("#button").classList.toggle("open");
}

const close = document.querySelector("#button");
close.onclick = toggleMenu;



// Weather 

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id))
  {js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');




  //directory
  const requestURL =  "./directory.json"
  const card = document.querySelector('cards');
  
  fetch(requestURL)
      .then(function (response) {
          return response.json();
          console.log(requestURL);
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
      let Website = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Change the textContent property of the h2 element to contain the prophet's full name
      h2.textContent = `${company.name} `;
  
      // Change the textContent property of the p element to contain the birth date and birth place 
      address.textContent = `Address - ${company.address}`
      Website.textContent= `Website - ${company.websiteURLs}`
  
      // Build the images attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropiate variable).
      portrait.setAttribute('src', company.imageurl);
      portrait.setAttribute('alt', `logo of  ${company.name} ${company.address} - ${company.membershipLevel} Membeship level.`);
      portrait.setAttribute('loading', 'lazy');
  
      //  Add/append the section(card) with the h2 element
      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(Website);
      card.appendChild(portrait);
  
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('div.cards').appendChild(card);
  
  };