document
.getElementById("cardForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  var cardName = document.getElementById("cardName").value;
  var konamiID = document.getElementById("KonamiID").value;
  var cardType = document.getElementById("cardType").value;
  var cardRarity = document.getElementById("cardRarity").value;

  var card = {
    name: cardName,
    konamiID: konamiID,
    type: cardType,
    rarity: cardRarity,
  };

  fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?' + '&namew=' + card.name + '&id=' + card.konamiID + '&type=' + card.type + '&rarity=' + card.rarity, )
  .then((response) => response.json())
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});