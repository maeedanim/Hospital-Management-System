// auth-handling.js

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show corresponding form
      const formId = tab.dataset.form;
      document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
      });
      document.getElementById(`${formId}-form`).classList.add('active');
    });
  });

  // Form submission handling
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (form.id === 'signup-form' || form.id === 'forgot-form') {
        // Show verification message and reset form
        document.getElementById('verification-message').style.display = 'block';
        form.reset();
      } else if (form.id === 'login-form') {
        // Redirect to dashboard on login
        window.location.href = 'dashboard.html';
      }
    });
  });
});
