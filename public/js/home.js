const profilesContainer = document.getElementById("profiles");

functions.httpsCallable("getPublicProfiles")()
  .then(result => {
    result.data.forEach(user => {
      const div = document.createElement("div");
      div.className = "profile-card";
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Skills Offered:</strong> ${user.skillsOffered.join(", ")}</p>
        <p><strong>Skills Wanted:</strong> ${user.skillsWanted.join(", ")}</p>
      `;
      profilesContainer.appendChild(div);
    });
  });
