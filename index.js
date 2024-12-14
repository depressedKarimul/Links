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
profile.style.backgroundImage = "url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?t=st=1734144797~exp=1734148397~hmac=b791701378c100849a66c4183c41e969ec7aace4542d43d49c2d7a68cc2145c0&w=996')"; // Default dark background image

// Toggle theme on button click
toggle.addEventListener('click', () => {
    if (body.classList.contains('text-gray-100')) {
        // Switch to light mode
        toggle.innerHTML = "🌙";
        body.classList.remove('text-gray-100');
        body.classList.add('text-gray-900');
        profile.classList.remove('bg-gray-900');
        profile.classList.add('bg-white');
        profile.style.backgroundImage = "url('https://img.freepik.com/free-vector/realistic-white-monochrome-background_23-2149010358.jpg?t=st=1734144920~exp=1734148520~hmac=22cf2c3a354077a4e0266a66fef863f50eaaaf4485b54f4bca23f79e3ba0f8af&w=996')"; // Light background image
    } else {
        // Switch to dark mode
        toggle.innerHTML = "☀️";
        body.classList.remove('text-gray-900');
        body.classList.add('text-gray-100');
        profile.classList.remove('bg-white');
        profile.classList.add('bg-gray-900');
        profile.style.backgroundImage = "url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?t=st=1734144797~exp=1734148397~hmac=b791701378c100849a66c4183c41e969ec7aace4542d43d49c2d7a68cc2145c0&w=996')"; // Dark background image
    }
});
