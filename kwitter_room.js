
//ADD YOUR FIREBASE LINKS HERE

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
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome To Switter "+user_name+"! :)";


  function addroom(){
    room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
    localStorage.setItem("room_name", 
    room_name); window.location = "kwitter_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("roomname- "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}