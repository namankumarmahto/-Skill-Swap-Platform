const mockProfile = {
  name: "Naman Kumar Mahto",
  email: "naman@example.com",
  location: "Patna, Bihar",
  skillsOffered: "Web Development, Java",
  skillsWanted: "React, AI/ML",
  availability: "Weekends",
  profileVisibility: "public",
  bio: "I'm a developer excited to share and learn skills!",
  photoURL: "/assets/profile-placeholder.png"
};

window.addEventListener('DOMContentLoaded', () => {
  // Load mock data
  document.getElementById("name").value = mockProfile.name;
  document.getElementById("email").value = mockProfile.email;
  document.getElementById("location").value = mockProfile.location;
  document.getElementById("skillsOffered").value = mockProfile.skillsOffered;
  document.getElementById("skillsWanted").value = mockProfile.skillsWanted;
  document.getElementById("availability").value = mockProfile.availability;
  document.getElementById("profileVisibility").value = mockProfile.profileVisibility;
  document.getElementById("bio").value = mockProfile.bio;
  document.getElementById("profile-pic-preview").src = mockProfile.photoURL;
  document.getElementById("nav-profile-pic").src = mockProfile.photoURL;
});

// Image preview
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

// Submit profile (mock)
document.getElementById("profile-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Profile saved successfully! (Mock)");
});
