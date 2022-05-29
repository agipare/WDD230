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

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');