// ✅ Firebase config
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
  const form = document.getElementById("createAccountForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validation
    if (password !== confirmPassword) {
      message.textContent = "❌ Passwords do not match!";
      message.style.color = "red";
      return;
    }

    if (password.length < 6) {
      message.textContent = "❌ Password must be at least 6 characters!";
      message.style.color = "red";
      return;
    }

    // Firebase Realtime Database write
    const userRef = database.ref("users/" + username);

    userRef.set({
      username: username,
      email: email,
      password: password
    })
    .then(() => {
      message.textContent = "✅ Account created and saved!";
      message.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      message.textContent = "❌ Error: " + error.message;
      message.style.color = "red";
    });
  });
});
