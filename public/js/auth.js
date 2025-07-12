
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCAeSqQIkl2Ycb5tCCFmWAsFyCxsbUZJ2A",
  authDomain: "skillswap-web-6f8c0.firebaseapp.com",
  projectId: "skillswap-web-6f8c0",
  storageBucket: "skillswap-web-6f8c0.firebasestorage.app",
  messagingSenderId: "19588089941",
  appId: "1:19588089941:web:9ffbd01516367ac23b2cdc",
  measurementId: "G-33S3WFC345",
  databaseURL: "https://skillswap-web-6f8c0-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Login logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const userRef = database.ref("users/" + username);

    userRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        if (user.password === password) {
          alert("✅ Login successful!");
          // Redirect to dashboard or homepage
          window.location.href = "dashboard.html"; // make this page if needed
        } else {
          alert("❌ Incorrect password.");
        }
      } else {
        alert("❌ User does not exist.");
      }
    }).catch((error) => {
      console.error("Login Error:", error);
      alert("An error occurred: " + error.message);
    });
  });
});
