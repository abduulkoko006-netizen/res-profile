function validate() {

  var first = document.getElementById("first_name").value;
  var last  = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;

  if (first === "" || last === "" || email === "") {
    alert("All fields are required");
    return false;
  }

  if (email.indexOf("@") === -1) {
    alert("Invalid email address");
    return false;
  }

  return true;
}
