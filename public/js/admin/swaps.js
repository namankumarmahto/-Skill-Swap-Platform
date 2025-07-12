// Sample swap request data (can later be fetched from DB/API)
const swapRequests = [
  {
    id: "#1012",
    from: "Jane Doe",
    to: "Mike Smith",
    offered: "Photoshop",
    requested: "Excel",
    status: "Pending"
  },
  {
    id: "#1013",
    from: "Ali Khan",
    to: "Emma Stone",
    offered: "Cooking",
    requested: "Web Design",
    status: "Accepted"
  },
  {
    id: "#1014",
    from: "Linda Lee",
    to: "John Carter",
    offered: "Guitar",
    requested: "Video Editing",
    status: "Rejected"
  }
];

const tableBody = document.querySelector("tbody");

// Function to render swap rows dynamically
function renderSwaps(data) {
  tableBody.innerHTML = "";
  data.forEach(req => {
    const row = document.createElement("tr");
    row.className = "border-b hover:bg-gray-50";

    let actionButtons = "";

    if (req.status === "Pending") {
      actionButtons = `
        <button class="text-green-600 hover:underline mr-2" onclick="approveSwap('${req.id}')">Approve</button>
        <button class="text-red-600 hover:underline" onclick="rejectSwap('${req.id}')">Reject</button>
      `;
    } else {
      actionButtons = `<button class="text-gray-500 hover:underline">View</button>`;
    }

    row.innerHTML = `
      <td>${req.id}</td>
      <td>${req.from}</td>
      <td>${req.to}</td>
      <td>${req.offered}</td>
      <td>${req.requested}</td>
      <td class="${getStatusClass(req.status)} font-medium">${req.status}</td>
      <td>${actionButtons}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Helpers
function getStatusClass(status) {
  if (status === "Accepted") return "text-green-600";
  if (status === "Rejected") return "text-red-600";
  return "text-yellow-600";
}

function approveSwap(id) {
  const req = swapRequests.find(r => r.id === id);
  if (req) {
    req.status = "Accepted";
    renderSwaps(swapRequests);
  }
}

function rejectSwap(id) {
  const req = swapRequests.find(r => r.id === id);
  if (req) {
    req.status = "Rejected";
    renderSwaps(swapRequests);
  }
}

// Initial render
renderSwaps(swapRequests);
