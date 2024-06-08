document
  .getElementById("cardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById('cardDetails').innerHTML = '';

    var konamiID = document.getElementById("KonamiID").value;
    var cardName = document.getElementById("cardName").value;
    var cardType = document.getElementById("cardType").value;

    var card = {
      konamiID: konamiID,
      name: cardName,
      type: cardType,
    };  
    var url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";

    if(card.konamiID) {
      url += "&id=" + card.konamiID;
    }
    if (card.name) {
      url += "&fname=" + card.name;
    }
    
    if (card.type) {
      url += '&type=' + card.type;
    }
    
   
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Cards found");  // Log a message if cards were found
          console.log("Cards: ", data);  // Log the data before the if statement
          
        
        if (data.data.length > 0) {
          renderCardDetails(data.data);
      } else {
          renderErrorMessage("No card found with the provided details.");
      }
  })
  .catch((error) => {
      console.error("Error:", error);
      renderErrorMessage("Error fetching card data. Please try again later.");
  });
});

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

        // Add an onclick event to the card element
      cardElement.onclick = function() {
        // Open a new window or tab
        var win = window.open('https://www.example.com', '_blank', 'width=1000,height=1000,top=500,left=500');      
          
        win.document.write(`
        <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        margin: 0;
        background: #23f1b3;
        font-family: Arial, sans-serif;
        overflow y: scroll;
      }
      img {
        width: 200px;
        height: auto;
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
        text-align: center;
      }
    </style>
    <h1>${card.name || ''}</h1>
    <img src="${card.card_images[0].image_url || ''}" alt="${card.name || ''}" />
    <p><strong>Description:</strong> ${card.desc || ''}</p>
    <p><strong>Card Type:</strong> ${card.type || ''}</p>
    <p><strong>Card Price on Ebay:</strong> $ ${card.card_prices[0].ebay_price || ''}</p>
    <p><strong>Card Price on Amazon:</strong> $ ${card.card_prices[0].amazon_price || ''}</p>
  `);

    

      // Close the document writing stream
      win.document.close();
    };

      cardDetailsContainer.appendChild(cardElement);
      
      });
    
  } catch (error) {
    console.error('Error:', error);
  }

}


function renderErrorMessage(message) {
const cardDetailsContainer = document.getElementById("cardDetails");
cardDetailsContainer.innerHTML = `<p class="error">${message}</p>`;
}