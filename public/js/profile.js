// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCAeSqQIkl2Ycb5tCCFmWAsFyCxsbUZJ2A",
  authDomain: "skillswap-web-6f8c0.firebaseapp.com",
  databaseURL: "https://skillswap-web-6f8c0-default-rtdb.firebaseio.com",
  projectId: "skillswap-web-6f8c0",
  storageBucket: "skillswap-web-6f8c0.appspot.com",
  messagingSenderId: "19588089941",
  appId: "1:19588089941:web:9ffbd01516367ac23b2cdc",
  measurementId: "G-33S3WFC345"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ Get user from localStorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || !currentUser.username) {
  alert("⚠️ You're not logged in. Redirecting to login...");
  window.location.href = "login.html";
}

const username = currentUser.username;
const userRef = db.ref("users/" + username);

// ✅ Load user profile
window.addEventListener("DOMContentLoaded", () => {
  userRef.once("value").then((snapshot) => {
    if (snapshot.exists()) {
      const user = snapshot.val();

      document.getElementById("name").value = user.name || "";
      document.getElementById("email").value = user.email || "";
      document.getElementById("location").value = user.location || "";
      document.getElementById("skillsOffered").value = user.skillsOffered?.join(", ") || "";
      document.getElementById("skillsWanted").value = user.skillsWanted?.join(", ") || "";
      document.getElementById("availability").value = user.availability || "";
      document.getElementById("profileVisibility").value = user.public ? "public" : "private";
      document.getElementById("bio").value = user.bio || "";
      
      const profilePhoto = user.profilePhoto || "/assets/profile-placeholder.png";
      document.getElementById("profile-pic-preview").src = profilePhoto;
      document.getElementById("nav-profile-pic").src = profilePhoto;
    } else {
      alert("User data not found.");
    }
  }).catch((error) => {
    console.error("Error fetching profile:", error);
  });
});

// ✅ Image preview logic
document.getElementById("photoUpload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("profile-pic-preview").src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// ✅ Save profile
document.getElementById("profile-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    location: document.getElementById("location").value,
    skillsOffered: document.getElementById("skillsOffered").value.split(",").map(s => s.trim()),
    skillsWanted: document.getElementById("skillsWanted").value.split(",").map(s => s.trim()),
    availability: document.getElementById("availability").value,
    public: document.getElementById("profileVisibility").value === "public",
    bio: document.getElementById("bio").value,
    profilePhoto: document.getElementById("profile-pic-preview").src
  };

  userRef.update(updatedData).then(() => {
    alert("✅ Profile updated!");
    // update localStorage too
    localStorage.setItem("currentUser", JSON.stringify({ username, ...updatedData }));
  }).catch((error) => {
    alert("❌ Failed to update profile.");
    console.error(error);
  });
});
