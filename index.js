function changeTheme() {
  console.log("changeTheme function has been called");
  if (document.body.style.backgroundImage === "url('clouds.png')") {
    document.body.style.backgroundImage = "url('stars.png')";
  }
  else {
    document.body.style.backgroundImage = "url('clouds.png')";
  }
}
