// Initialize Firebase
  var config = {
    apiKey: "AIzaSyArSx2t7-xqNePSBu5_c5eQ425VjWvJ04Y",
    authDomain: "form-81bfa.firebaseapp.com",
    databaseURL: "https://form-81bfa.firebaseio.com",
    projectId: "form-81bfa",
    storageBucket: "",
    messagingSenderId: "439605389878"
  };
  firebase.initializeApp(config);

//reference the message collection
var messageRef = firebase.database().ref('messages');



//waiting for the submit


document.getElementById('form').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();
	var name=getInput("name");
	var prename=getInput("prename");
	var email=getInput("email");
	var country=getInput("country");
	var gender=getInput("gender");
	var password =getInput("password");

	console.log(gender+" "+name+" "+prename+" "+ country+ " "+email+" "+password);
	saveMessage(name,prename,email,password,gender,country);


}

//get the values of the inputs

function getInput(id){

	return document.getElementById(id).value;
}

//save message to firebase 

function saveMessage(name,prename,email,country,gender){

	var newMessageRef= messageRef.push();
	newMessageRef.set({
		name : name,
		prename : prename,
		email : email,
		password : password,
		country : country,
		gender : gender
	});
}