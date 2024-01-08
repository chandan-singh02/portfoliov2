const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

/////////validation////////
function validation() {
  var user = document.getElementById("user").value;
  var emails = document.getElementById("email").value;
  //user
  if (user == "") {
    document.getElementById("username").innerHTML =
      "*plz fill the username field*";
    return false;
  }
  if (user.length <= 2 || user.length > 20) {
    document.getElementById("username").innerHTML =
      "*length of name should be 2 to 20*";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      "*only character are allowed*";
    return false;
  }
  ///emails
  if (emails == "") {
    document.getElementById("useremail").innerHTML =
      "*plz fill the email field*";
    return false;
  }
  if (emails.indexOf("@") <= 0) {
    document.getElementById("useremail").innerHTML =
      "*@ not allowed beginning*";
    return false;
  }
  if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("useremail").innerHTML = "*invalid .*";
    return false;
  }
}
