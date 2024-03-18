function changeTheme() {
  console.log("changeTheme function has been called");
  console.log("This is the current background: " + document.body.style.backgroundImage)
  if (document.body.style.backgroundImage === "url('clouds.png')") {
    console.log("the background is clouds. Now changing to stars.");
    document.body.style.backgroundImage = "url('stars.png')";
    console.log("should be stars now.");
  }
  else {
    document.body.style.backgroundImage = "url('clouds.png')";
  }
}
