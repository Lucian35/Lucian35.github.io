//I have no clue whats going on here
function changeTheme() {
  var r = document.querySelector('body::before');
  var rs = getComputedStyle(r);
  if (rs.getPropertyValue('--blue') === 1) {
    r.style.setProperty('--cloudOpacity', 0.5);
  }
  else {
    r.style.setProperty('--cloudOpacity', 1);
  }
}
