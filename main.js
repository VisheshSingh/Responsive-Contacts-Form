// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMyM0aKjBxRA35BUpWkToVZPqoZN8RJcM",
    authDomain: "contacts-5b3b2.firebaseapp.com",
    databaseURL: "https://contacts-5b3b2.firebaseio.com",
    projectId: "contacts-5b3b2",
    storageBucket: "",
    messagingSenderId: "282094697430"
  };
  firebase.initializeApp(config);

  //Listen for submit
  document.getElementById('contactform').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();
//Get Values

    var name = getValue('name');
    var company = getValue('company');
    var email = getValue('email');
    var phone = getValue('phone');
    var message = getValue('message');

    console.log(name);
  }

  function getValue(e){
      return document.getElementById(e).value;
  }
