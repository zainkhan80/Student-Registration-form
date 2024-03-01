
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, push ,ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDyNiWwpgT5qK2t4LbA448y--BwUFTEgkg",
    authDomain: "student-registration-for-879e3.firebaseapp.com",
    databaseURL: "https://student-registration-for-879e3-default-rtdb.firebaseio.com",
    projectId: "student-registration-for-879e3",
    storageBucket: "student-registration-for-879e3.appspot.com",
    messagingSenderId: "959010680391",
    appId: "1:959010680391:web:ae3833ca1b986156190b62",
    measurementId: "G-MP59NGQN1T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();

  var city = document.getElementById("city");
  var course = document.getElementById("course");
  var name = document.getElementById("name");
  var fname = document.getElementById("fname");
  var email = document.getElementById("email");
  var Age = document.getElementById("Age");
  var cnic = document.getElementById("cnic");
  var phone = document.getElementById("phone");
  var dob = document.getElementById("dob");
  var gender = document.getElementById("gender");
  var address = document.getElementById("address");
  var qualification = document.getElementById("qualification");
  var laptop = document.getElementById("laptop");

  console.log(firebase)
  window.add = function() {
    var obj = {
        city:city.value,
        course:course.value,
        name:name.value,
        father_name:fname.value,
        email:email.value,
        Number:phone.value,
        cnic:cnic.value,
        father_cnic:fcnic.value,
        date_of_birth:dob.value,
        gender:gender.value,
        address:address.value,
        qualification:qualification.value,
        laptop:laptop.value,
    };
    
    obj.id = push(ref(database, "Student Registration Office/")).key;
    
    var reference = ref(database, `Student Registration Office/${obj.id}`);
    
    set(reference, obj);
    
};


window.showData = function() {
    var displayDataContainer = document.getElementById("displayDataContainer");
    var reference = ref(database, "Student Registration Office/");

    onValue(reference, function (data) {
        var newData = data.val();

        var htmlContent = "<h2>Data from Student Registration Office</h2>";
        htmlContent += "<pre>" + JSON.stringify(newData, null, 2) + "</pre>";

        displayDataContainer.innerHTML = htmlContent;
    });
}