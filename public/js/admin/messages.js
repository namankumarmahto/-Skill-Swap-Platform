// messages.js

document.addEventListener('DOMContentLoaded', () => {
  // Handle clicks for "Mark as Resolved" and "Reply"
  document.body.addEventListener('click', (e) => {
    const target = e.target;

    if (target.textContent === 'Mark as Resolved') {
      const parent = target.closest('div');
      const confirmed = confirm('Are you sure you want to mark this message as resolved?');

      if (confirmed) {
        parent.style.opacity = '0.6';
        target.textContent = 'Resolved';
        target.classList.remove('text-blue-600');
        target.classList.add('text-gray-400', 'cursor-not-allowed');
        target.disabled = true;
      }
    }

    if (target.textContent === 'Reply') {
      const user = target.closest('div').querySelector('strong').textContent;
      const replyText = prompt(Write a reply to ${user}:);
      if (replyText) {
        alert(Reply sent to ${user}: "${replyText}");
        target.textContent = 'Replied';
        target.classList.remove('text-blue-600');
        target.classList.add('text-green-600');
      }
    }
  });
});