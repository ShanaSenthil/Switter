function adduser(){
user_name = document.getElementById("user_name").value;

firebase.database().ref("/").child(user_name).update({
purpose:"adding user" 
});
}
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCLz0ZfLz7t8K27nKAPZzgSipI5zTadNr4",
    authDomain: "switter-749fb.firebaseapp.com",
    databaseURL: "https://switter-749fb-default-rtdb.firebaseio.com",
    projectId: "switter-749fb",
    storageBucket: "switter-749fb.appspot.com",
    messagingSenderId: "518754441482",
    appId: "1:518754441482:web:1f6b72f9d69832cac502f3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);