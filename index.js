//I have no clue whats going on here but it works. Thank you Claude.
function changeTheme() {
  const htmlElement = document.documentElement;
  const currentOpacity = getComputedStyle(htmlElement).getPropertyValue('--cloudOpacity');

  if (currentOpacity === "1"){
    htmlElement.style.setProperty('--cloudOpacity', '0.5');
  }
  else {
    htmlElement.style.setProperty('--cloudOpacity', '1');
  }
}
