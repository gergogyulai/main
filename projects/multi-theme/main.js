const themeSelector = document.getElementById('theme-selector');
const accentSelector = document.getElementById('accent-selector');
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedAccent = localStorage.getItem('selectedAccent');

// Set the selected options in the theme and accent selectors
themeSelector.value = selectedTheme;
accentSelector.value = selectedAccent;

// Apply the selected theme and accent colors to the page
document.body.classList.add(selectedTheme, selectedAccent);

// Listen for changes to the selected theme
themeSelector.addEventListener('change', (event) => {
  // Remove the existing theme class from the body element
  document.body.classList.remove('light-theme', 'dark-theme');

  // Add the selected theme class to the body element
  document.body.classList.add(event.target.value);

  // Save the selected theme in local storage
  localStorage.setItem('selectedTheme', event.target.value);
});

// Listen for changes to the selected accent color
accentSelector.addEventListener('change', (event) => {
  // Remove the existing accent color class from the body element
  document.body.classList.remove('red-accent', 'blue-accent');

  // Add the selected accent color class to the body element
  document.body.classList.add(event.target.value);

  // Save the selected accent color in local storage
  localStorage.setItem('selectedAccent', event.target.value);
});