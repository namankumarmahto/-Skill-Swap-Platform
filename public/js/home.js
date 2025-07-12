const profilesContainer = document.getElementById("profiles");

firebase.functions().httpsCallable("getPublicProfiles")().then(result => {
  const users = result.data;
  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "profile-card";
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Skills Offered:</strong> ${user.skillsOffered.join(", ")}</p>
      <p><strong>Skills Wanted:</strong> ${user.skillsWanted.join(", ")}</p>
      <p><strong>Availability:</strong> ${user.availability}</p>
    `;
    profilesContainer.appendChild(div);
  });
});
