// Initialize tooltips
tippy('.link', {
    placement: 'bottom'
});

// Select DOM elements
const body = document.querySelector('body');
const profile = document.getElementById('profile');

// Initialize Default Dark Mode
// Ensure the UI starts in the correct state
body.classList.add('text-gray-100');
profile.classList.add('bg-gray-900');
profile.style.backgroundImage = "url('https://i.postimg.cc/TYfyMQP2/dark.jpg')";
