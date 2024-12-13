  // Initialize tooltips
  tippy('.link', {
    placement: 'bottom'
});

// Select DOM elements
const toggle = document.querySelector('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');

// Default dark mode
body.classList.add('text-gray-100'); // Dark text
profile.classList.add('bg-gray-900'); // Dark background

// Toggle theme on button click
toggle.addEventListener('click', () => {
    if (body.classList.contains('text-gray-100')) {
        // Switch to light mode
        toggle.innerHTML = "🌙";
        body.classList.remove('text-gray-100');
        body.classList.add('text-gray-900');
        profile.classList.remove('bg-gray-900');
        profile.classList.add('bg-white');
    } else {
        // Switch to dark mode
        toggle.innerHTML = "☀️";
        body.classList.remove('text-gray-900');
        body.classList.add('text-gray-100');
        profile.classList.remove('bg-white');
        profile.classList.add('bg-gray-900');
    }
});

		