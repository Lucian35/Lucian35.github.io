//I have no clue whats going on here
function changeTheme() {
  var r = document.querySelector('body::before');

  var rs = getComputedStyle(r);
  console.log(rs);
  if (rs.getPropertyValue('--cloudOpacity') === "1") {
    r.style.setProperty('--cloudOpacity', "0.5");
    console.log("opacity was one and was changed");
  }
  else {
    r.style.setProperty('--cloudOpacity', "1");
    console.log("opacity was transparent and was changed");
  }
}
