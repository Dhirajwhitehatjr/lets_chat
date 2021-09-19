

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "chating.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "chating.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "start.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyC8qMp_E2n-DU_vG7bOj6ogh1r0Y1G0P4s",
    authDomain: "nothing-dc41e.firebaseapp.com",
    databaseURL: "https://nothing-dc41e-default-rtdb.firebaseio.com",
    projectId: "nothing-dc41e",
    storageBucket: "nothing-dc41e.appspot.com",
    messagingSenderId: "723407196023",
    appId: "1:723407196023:web:e85070592a873e4d52db72",
    measurementId: "G-TMB9SS3RS0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);