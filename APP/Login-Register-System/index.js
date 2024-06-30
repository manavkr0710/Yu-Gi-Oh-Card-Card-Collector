
//web app configs
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
  // Initialize variables
   const auth = firebase.auth()
   const database = firebase.database()
  // register new user
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value

  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is incorrect')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false ) {
      alert('One or More Extra Fields is incorrect')
      return
    }
   
    // firebase function for authentication to create new user account with email and password
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      let user = auth.currentUser
  
      // Add this user to Firebase Database
      let database_ref = database.ref()
  
      // Create User data
      let user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      alert('User Created!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      let error_code = error.code
      let error_message = error.message
  
      alert(error_message)
    })
  }
  
  // login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is incorrect')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      let user = auth.currentUser
  
      // Add user to Firebase Database
      let database_ref = database.ref()
  
      // Create User data
      let user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      alert('User Logged In')
      window.location.href = '/APP/app/file.html';      
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      let error_message = error.message
      alert(error_message)
    })
  }

  // Validate email
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  //validate password
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  //used to validate fields (name, email, etc)
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }

