// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCAeSqQIkl2Ycb5tCCFmWAsFyCxsbUZJ2A",
  authDomain: "skillswap-web-6f8c0.firebaseapp.com",
  projectId: "skillswap-web-6f8c0",
  storageBucket: "skillswap-web-6f8c0.firebasestorage.app",
  messagingSenderId: "19588089941",
  appId: "1:19588089941:web:9ffbd01516367ac23b2cdc",
  databaseURL: "https://skillswap-web-6f8c0-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

window.onload = function () {
  const userList = document.getElementById("userList");
  userList.innerHTML = "<p>Loading...</p>";

  db.ref("users").once("value")
    .then(snapshot => {
      const users = snapshot.val();
      userList.innerHTML = "";

      Object.entries(users).forEach(([key, user]) => {
        if (user.public) {
          const card = createUserCard(user, key);
          userList.appendChild(card);
        }
      });
    })
    .catch(error => {
      userList.innerHTML = "<p>Failed to load users.</p>";
      console.error("Error:", error);
    });
};

function createUserCard(user, uid) {
  const div = document.createElement("div");
  div.className = "user-card";

  const rating = getAverageRating(user.ratings);

  div.innerHTML = `
    <div class="user-info">
      <img class="user-photo" src="${user.profilePhoto || 'https://via.placeholder.com/80'}" alt="${user.name}" />
      <div class="user-details">
        <h3>${user.name}</h3>
        <p><strong>Skills Offered:</strong> ${user.skillsOffered?.join(', ') || 'N/A'}</p>
        <p><strong>Skills Wanted:</strong> ${user.skillsWanted?.join(', ') || 'N/A'}</p>
      </div>
    </div>
    <div class="user-actions">
      <button class="btn-request" onclick="requestSwap('${uid}')">Request</button>
      <div class="user-rating">Rating: ${rating}</div>
    </div>
  `;
  return div;
}

function getAverageRating(ratings = {}) {
  const scores = Object.values(ratings).map(r => r.score || 0);
  if (scores.length === 0) return "N/A";
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return avg.toFixed(1);
}

function requestSwap(uid) {
  alert("Swap request sent to " + uid + " (functionality coming soon!)");
}

function searchUsers() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const availability = document.getElementById("availability").value.toLowerCase();
  const cards = document.querySelectorAll(".user-card");

  cards.forEach(card => {
    const content = card.textContent.toLowerCase();
    const show = content.includes(search) && (availability === "" || content.includes(availability));
    card.style.display = show ? "flex" : "none";
  });
}
