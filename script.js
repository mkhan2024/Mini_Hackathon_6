document.addEventListener("DOMContentLoaded", () => {
    const themeButtons = {
        "light-theme": "light-mode",
        "dark-theme": "dark-mode",
        "colorful-theme": "colorful-mode",
        "nature-theme": "nature-mode",
        "space-theme": "space-mode"
    };

    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme or default to light-mode
    if (savedTheme) {
        document.body.className = savedTheme;
    } else {
        document.body.className = "light-mode";
    }

    // Add event listeners for each theme button
    Object.keys(themeButtons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        button.addEventListener("click", () => {
            const themeClass = themeButtons[buttonId];
            setTheme(themeClass);
        });
    });

    // Function to set and save theme
    function setTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }
});
