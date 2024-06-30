document
  .getElementById("cardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById('cardDetails').innerHTML = '';

    let link = formulateURL(); // formulates link according to card search


    //fetching the card data from API
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log("Cards found"); 
          console.log("Cards: ", data);  

        if (data.data.length > 0) {
          //render card images based on card search
          renderCardDetails(data.data);
      } else {
          renderErrorMessage("No card found with the provided details.");
      }
  })
  //display error message
  .catch((error) => {
      console.error("Error:", error);
      renderErrorMessage("Error fetching card data. Please try again.");
  });
});

function formulateURL(){
  //card search fields
    let konamiID = document.getElementById("KonamiID").value;
    let cardName = document.getElementById("cardName").value;
    let cardType = document.getElementById("cardType").value;


    //card object
    let card = {
      konamiID: konamiID,
      name: cardName,
      type: cardType,
    };  
    //base api link
    let url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";

    if(card.konamiID) {
      url += "&id=" + card.konamiID;
    }
    if (card.name) {
      url += "&fname=" + card.name;
    }
    if (card.type) {
      url += '&type=' + card.type;
    }
    return url;

}
function renderCardDetails(cardData) {
  const cardDetailsContainer = document.getElementById("cardDetails");
cardDetailsContainer.classList.add("card-container");

  try {
      cardData.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
        <img src="${card.card_images[0].image_url || ''}" alt="${card.name || ''}" style="width: 200px; height: auto;" />
        `;


        // on click, takes user to seperate page with details about the card
      cardElement.onclick = function() {
        const url = `card-info.html?name=${encodeURIComponent(card.name)}&image_url=${encodeURIComponent(card.card_images[0].image_url)}&desc=${encodeURIComponent(card.desc)}&type=${encodeURIComponent(card.type)}&ebay_price=${encodeURIComponent(card.card_prices[0].ebay_price)}&amazon_price=${encodeURIComponent(card.card_prices[0].amazon_price)}`;
        window.open(url, '_blank');
    };
      cardDetailsContainer.appendChild(cardElement);
      });

  } catch (error) {
    console.error('Error:', error);
  }

}

//error message 
function renderErrorMessage(message) {
  let errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.classList.add('errorMessage');
  document.body.appendChild(errorMessage);
}

//if user wants to log out
function confirmLogout() {
  var logoutConfirmation = confirm("Are you sure you want to log out?");
  if (logoutConfirmation) {
      // User clicked OK
      window.location.href = '../Login-Register-System/index.html'; // Redirect to login page 
  } else {
      // User clicked Cancel, do nothing
  }
}