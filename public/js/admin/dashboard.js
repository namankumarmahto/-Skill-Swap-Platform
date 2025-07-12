// admin.js

document.addEventListener('DOMContentLoaded', () => {
  // Basic search filter for users
  const searchInput = document.querySelector('input[type="text"]');
  const tableRows = document.querySelectorAll('tbody tr');

  if (searchInput && tableRows.length > 0) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      tableRows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // Handle action buttons
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.text-red-600')) {
      const confirmed = confirm('Are you sure you want to delete this entry?');
      if (!confirmed) e.preventDefault();
    }

    if (e.target.matches('.text-yellow-600')) {
      const confirmed = confirm('Deactivate this user?');
      if (!confirmed) e.preventDefault();
      else e.target.innerText = 'Activate';
      e.target.classList.replace('text-yellow-600', 'text-green-600');
    }

    if (e.target.matches('.text-green-600') && e.target.innerText === 'Activate') {
      const confirmed = confirm('Activate this user?');
      if (!confirmed) e.preventDefault();
      else e.target.innerText = 'Deactivate';
      e.target.classList.replace('text-green-600', 'text-yellow-600');
    }

    if (e.target.innerText === 'Approve') {
      const confirmed = confirm('Approve this swap request?');
      if (!confirmed) e.preventDefault();
    }

    if (e.target.innerText === 'Reject') {
      const confirmed = confirm('Reject this swap request?');
      if (!confirmed) e.preventDefault();
    }
  });
});