const nameInput = document.getElementById("name");
const skillsOfferedInput = document.getElementById("skillsOffered");
const skillsWantedInput = document.getElementById("skillsWanted");

auth.onAuthStateChanged(user => {
  if (!user) return location.href = "/login.html";

  db.collection("profiles").doc(user.uid).get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        nameInput.value = data.name;
        skillsOfferedInput.value = data.skillsOffered.join(", ");
        skillsWantedInput.value = data.skillsWanted.join(", ");
      }
    });
});

function saveProfile() {
  const data = {
    name: nameInput.value,
    skillsOffered: skillsOfferedInput.value.split(",").map(s => s.trim()),
    skillsWanted: skillsWantedInput.value.split(",").map(s => s.trim()),
  };
  db.collection("profiles").doc(auth.currentUser.uid).set(data)
    .then(() => alert("Profile updated!"));
}
