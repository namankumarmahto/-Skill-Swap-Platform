document.addEventListener("DOMContentLoaded", () => {
  // Simulated dynamic data (can be replaced with API call)
  const reports = {
    totalUsers: 1250,
    totalSwaps: 650,
    avgRating: 4.3,
    skillPopularity: [
      { skill: "Photoshop", count: 145 },
      { skill: "Excel", count: 130 },
      { skill: "Web Design", count: 118 }
    ]
  };

  // Update number cards
  document.querySelector("#totalUsers").textContent = reports.totalUsers;
  document.querySelector("#totalSwaps").textContent = reports.totalSwaps;
  document.querySelector("#avgRating").textContent = `${reports.avgRating} / 5`;

  // Render skill list
  const skillList = document.querySelector("#skillList");
  skillList.innerHTML = "";
  reports.skillPopularity.forEach(item => {
    const li = document.createElement("li");
    li.className = "flex justify-between";
    li.innerHTML = `<span>${item.skill}</span><span>${item.count} users</span>`;
    skillList.appendChild(li);
  });
});
