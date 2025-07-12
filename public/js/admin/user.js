// Sample user data (can be replaced by actual DB/API)
const users = [
  {
    id: "#U101",
    name: "Jane Doe",
    email: "jane@example.com",
    location: "New York",
    public: true,
    status: "Active"
  },
  {
    id: "#U102",
    name: "Ali Khan",
    email: "ali@example.com",
    location: "Lahore",
    public: false,
    status: "Pending"
  },
];

// DOM Elements
const searchInput = document.querySelector("input[type='text']");
const tableBody = document.querySelector("tbody");

// Filter users live
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(term) ||
    user.email.toLowerCase().includes(term)
  );
  renderUsers(filtered);
});

// Render table rows
function renderUsers(userList) {
  tableBody.innerHTML = "";
  userList.forEach(user => {
    const row = document.createElement("tr");
    row.className = "border-b hover:bg-gray-50";

    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.location}</td>
      <td>${user.public ? "Yes" : "No"}</td>
      <td class="${getStatusClass(user.status)} font-medium">${user.status}</td>
      <td>
        <button class="text-blue-600 hover:underline mr-2">View</button>
        ${user.status === "Active"
          ? `<button class="text-yellow-600 hover:underline mr-2">Deactivate</button>`
          : `<button class="text-green-600 hover:underline mr-2">Activate</button>`}
        <button class="text-red-600 hover:underline">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Status color class
function getStatusClass(status) {
  if (status === "Active") return "text-green-600";
  if (status === "Pending") return "text-yellow-500";
  return "text-red-600";
}

// Initial load
renderUsers(users);
