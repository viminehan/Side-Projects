 /*******************************
 *** WASTE SELECTION BUTTONS ***
 *******************************/

let selectedWasteType = "";
let userPostcode = "";

const metalButton = document.querySelector('#metalType');
const glassButton = document.querySelector('#glassType');
const organicButton = document.querySelector('#organicType');
const paperButton = document.querySelector('#paperType');
const plasticButton = document.querySelector('#plasticType');

metalButton.addEventListener('click', selectMetal);
function selectMetal() {
    selectedWasteType = "metal";
    metalButton.classList.add('selectedType');

    glassButton.classList.remove('selectedType');
    organicButton.classList.remove('selectedType');
    paperButton.classList.remove('selectedType');
    plasticButton.classList.remove('selectedType');

    
}

glassButton.addEventListener('click', selectGlass);
function selectGlass() {
    selectedWasteType = "glass";
    glassButton.classList.add('selectedType');

    metalButton.classList.remove('selectedType');
    organicButton.classList.remove('selectedType');
    paperButton.classList.remove('selectedType');
    plasticButton.classList.remove('selectedType');
}

organicButton.addEventListener('click', selectOrganic);
function selectOrganic() {
    selectedWasteType = "organic";
    organicButton.classList.add('selectedType');

    metalButton.classList.remove('selectedType');
    glassButton.classList.remove('selectedType');
    paperButton.classList.remove('selectedType');
    plasticButton.classList.remove('selectedType');
}

paperButton.addEventListener('click', selectPaper);
function selectPaper() {
    selectedWasteType = "paper";
    paperButton.classList.add('selectedType');

    metalButton.classList.remove('selectedType');
    glassButton.classList.remove('selectedType');
    organicButton.classList.remove('selectedType');
    plasticButton.classList.remove('selectedType');
}

plasticButton.addEventListener('click', selectPlastic);
function selectPlastic() {
    selectedWasteType = "plastic";
    plasticButton.classList.add('selectedType');

    metalButton.classList.remove('selectedType');
    glassButton.classList.remove('selectedType');
    organicButton.classList.remove('selectedType');
    paperButton.classList.remove('selectedType');
}

/****************
 *** OTHER JS ***
 ****************/

 //Search Button

 const searchButton = document.querySelector('#searchListingsButton');
 searchButton.addEventListener('click', activateListings);

 function activateListings() {
    userPostcode = document.querySelector('#postcodeBox').value
    console.log(selectedWasteType);
    //Alerts if Postcode not provided.
    if (userPostcode !=="" && userPostcode.length === 4) {} else {
        alert('Please enter a valid postcode.')
    }

    //Alerts if Waste Type not Selected.
    if (selectedWasteType !=="") {} else { 
        alert('Please select a waste type.')
    }

    //If Input is good - sends user to listings.
     if (selectedWasteType !=="" && userPostcode !=="" && userPostcode.length === 4) {
         navigateToListings();
         generateListings();
     } else {}
 }

 //Generates appropriate listings.
 function generateListings() {
 }

  //Takes users to listings.
  function navigateToListings(){
    window.location="listings.html";
}

document.querySelector('.trashyLogo').addEventListener('click', navigateToHome);

//Takes users to Home/Index.
function navigateToHome() {
    window.location="index.html";
}

/******************
 *** NAVIGATION ***
 *****************/