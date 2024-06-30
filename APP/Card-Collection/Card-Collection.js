//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, onValue, ref} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

//web app configs
const firebaseConfig = {
    apiKey: "AIzaSyBvAGs6iFWqpz9BMqKdYdCJaMNXF6bP3yc",
    authDomain: "yu-gi-oh-card-collector.firebaseapp.com",
    databaseURL: "https://yu-gi-oh-card-collector-default-rtdb.firebaseio.com",
    projectId: "yu-gi-oh-card-collector",
    storageBucket: "yu-gi-oh-card-collector.appspot.com",
    messagingSenderId: "981886628562",
    appId: "1:981886628562:web:117017992bb8d3899bf30b"
  };
// Initializing app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//firebase method that is used to monitor user's sign in state changes.
//whenever user logs in or out, function will be called
onAuthStateChanged(auth, (user) => {
  if (user) {
    //method to fetch data
    fetchUserData(user.uid);
  } else {
    console.log("No user is signed in.");
  }
});

function fetchUserData(userId) {
  const db = getDatabase();
  const userRef = ref(db, `users/${userId}`);

  //firebase function with realtime database to read and listen for changes
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data) //logs data for debugging
    displayCards(data); //function that displays cards

  }, (error) => {
    console.error("Error fetching user data:", error);
  });
}

function displayCards(userData) {
  const container = document.getElementById('cardDetails');
  container.innerHTML = ''; 

  if (userData.cards) {
    Object.keys(userData.cards).forEach(cardId => {
      const card = userData.cards[cardId];
      if (card.imageUrl) {
        const imgElement = document.createElement('img');
        imgElement.src = card.imageUrl;
        imgElement.alt = "Card Image";
        imgElement.classList.add('card-image'); 
        container.appendChild(imgElement);
      }
    });
  }
}