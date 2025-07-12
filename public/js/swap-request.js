const requestsContainer = document.getElementById("requests");

auth.onAuthStateChanged(user => {
  if (!user) return location.href = "/login.html";

  db.collection("requests").where("from", "==", user.uid)
    .onSnapshot(snapshot => {
      requestsContainer.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");
        div.className = "profile-card";
        div.innerHTML = `
          <h3>Swap Request</h3>
          <p><strong>Offered:</strong> ${data.offered}</p>
          <p><strong>Wanted:</strong> ${data.wanted}</p>
          <p><strong>Status:</strong> ${data.status}</p>
        `;
        requestsContainer.appendChild(div);
      });
    });
});
