// Get the icon element
const icon = document.getElementById('theme-icon');

// Function to apply the current theme and update the icon
function applyTheme() {
    const storedTheme = localStorage.getItem("pref-theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check for saved preference in localStorage
    if (storedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.src = 'assets/sun.ico';
        icon.alt = 'Switch to light theme';
    } else if (storedTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
        icon.src = 'assets/moon.ico';
        icon.alt = 'Switch to dark theme';
    } 
    // If no saved preference, use system preference
    else if (prefersDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.src = 'assets/sun.ico';
        icon.alt = 'Switch to light theme';
    } else {
        document.documentElement.removeAttribute("data-theme");
        icon.src = 'assets/moon.ico';
        icon.alt = 'Switch to dark theme';
    }
}

// Set the initial theme and icon on page load
applyTheme();

// Add event listener to toggle the theme
document.getElementById('theme-toggle').addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    // Toggle theme based on current setting
    if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        icon.src = 'assets/moon.ico';
        icon.alt = 'Switch to dark theme';
        localStorage.setItem('pref-theme', 'light'); // Save preference to local storage
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.src = 'assets/sun.ico';
        icon.alt = 'Switch to light theme';
        localStorage.setItem('pref-theme', 'dark'); // Save preference to local storage
    }
});
