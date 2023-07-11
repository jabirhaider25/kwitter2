//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCaZpbs-1Mc42kV6hMA-rXEG0xHsrfxCkA",
      authDomain: "classtest-96cd6.firebaseapp.com",
      databaseURL: "https://classtest-96cd6-default-rtdb.firebaseio.com",
      projectId: "classtest-96cd6",
      storageBucket: "classtest-96cd6.appspot.com",
      messagingSenderId: "587677487444",
      appId: "1:587677487444:web:23e1337241458d9eb138c1"
};


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id) >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function send()
{
msg=document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg,
like:0
});
document.getElementById("msg").value = "";
}