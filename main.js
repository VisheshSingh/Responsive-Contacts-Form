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

//Reference messages collection
  var messageRef = firebase.database().ref('messages');

  //Listen for submit
  document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit form
  function submitForm(e){
      e.preventDefault();
//Get Values

    var name = getValue('name');
    var company = getValue('company');
    var email = getValue('email');
    var phone = getValue('phone');
    var message = getValue('message');

    saveMessage(name, company, email,phone, message);

    //show alert
    document.querySelector('.alertmessage').style.display="block";

    setTimeout(function(){
        document.querySelector('.alertmessage').style.display="none";
    }, 3000);

    document.getElementById('contactform').reset();

  }

  function getValue(e){
      return document.getElementById(e).value;
  }

//Save messages to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });

}
