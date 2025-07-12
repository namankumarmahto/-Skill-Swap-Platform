// ✅ Firebase config (same as before)
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

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const message = document.getElementById("login-message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      message.textContent = "Please enter both username and password.";
      return;
    }

    // 🔍 Fetch user by username from Firebase
    const userRef = database.ref("users/" + username);

    userRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        if (user.password === password) {
          // ✅ Save user to localStorage for profile page
          localStorage.setItem("currentUser", JSON.stringify({ username, ...user }));
          
          // ✅ Redirect to home
          window.location.href = "home.html";
        } else {
          message.textContent = "❌ Incorrect password.";
        }
      } else {
        message.textContent = "❌ User does not exist.";
      }
    }).catch((error) => {
      console.error("Login error:", error);
      message.textContent = "Error: " + error.message;
    });
  });
});
