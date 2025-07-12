const profilesContainer = document.getElementById("profiles");

firebase.functions().httpsCallable("getPublicProfiles")().then(result => {
  const users = result.data;
  users.forEach(user => {
    const div = document.createElement("div");
    div.style = "border: 1px solid #ccc; padding: 10px; margin: 10px;";
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Skills Offered:</strong> ${user.skillsOffered.join(", ")}</p>
      <p><strong>Availability:</strong> ${user.availability}</p>
    `;
    profilesContainer.appendChild(div);
  });
});
