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
  const requestURL = 'chamber site/directory.json';
  const cards = document.querySelector('cards');
  
  fetch(requestURL)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
          console.table(jsonObject);
          const prophets = jsonObject['companies'];
          prophets.forEach(displayProphets);
      });
  
  function displayProphets(prophet) {
      // Create elements to add to the document
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Change the textContent property of the h2 element to contain the prophet's full name
      h2.textContent = `${companies.name} `;
  
      // Change the textContent property of the p element to contain the birth date and birth place 
      birthDate.textContent = `Date of Birth - ${prophet.birthdate}`
      birthPlace.textContent= `Place of Birth - ${prophet.birthplace}`
  
      // Build the images attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropiate variable).
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
  
      //  Add/append the section(card) with the h2 element
      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(portrait);
  
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('div.cards').appendChild(card);
  
  };
  
  
  
  