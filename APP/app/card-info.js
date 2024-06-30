
//web app firebase configs
let firebaseConfig = {
    apiKey: "AIzaSyBvAGs6iFWqpz9BMqKdYdCJaMNXF6bP3yc",
    authDomain: "yu-gi-oh-card-collector.firebaseapp.com",
    projectId: "yu-gi-oh-card-collector",
    storageBucket: "yu-gi-oh-card-collector.appspot.com",
    messagingSenderId: "981886628562",
    appId: "1:981886628562:web:117017992bb8d3899bf30b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initializing authentication and database
  const auth = firebase.auth()
   const database = firebase.database()

   //function used to get field values
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  // Set the content based on URL parameters
  const cardName = getQueryParam('name');
  document.getElementById('name').textContent = cardName;
  const imageUrl = getQueryParam('image_url');
  document.getElementById('image_url').src = imageUrl;

  document.getElementById('image_url').alt = getQueryParam('name');
  document.getElementById('desc').textContent = getQueryParam('desc');
  document.getElementById('type').textContent = getQueryParam('type');
  document.getElementById('ebay_price').textContent = getQueryParam('ebay_price');
  document.getElementById('amazon_price').textContent = getQueryParam('amazon_price');


function addCard(){
    let user = auth.currentUser;
    let database_ref = database.ref();

    //to the reference path that the card should be added to 
    let cardsRef = database_ref.child('users/' + user.uid + '/cards');
  
    // card object
    let newCard = {
        name: cardName,
        imageUrl: imageUrl 
      };
    // adding card to the database
    cardsRef.push(newCard, function(error) {
        if (error) {
          console.log('Failed to add new card:', error);
        } else {
          console.log('New card added successfully!');
        }
    });}