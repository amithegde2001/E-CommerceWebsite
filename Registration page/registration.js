

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;



  if (!nameRegex.test(username)) {
    alert('Please enter a valid user name (letters only)');
    return;
  }
  
  
  
  else  if (!passwordRegex.test(password)) {
    alert('Please enter a valid password (at least 8 characters long with at least one uppercase letter, one lowercase letter, and one digit)');
    return;
  }
  
  
  else
  {
    alert ("Registered successfully");
window.location = "login.html"; 
return false;
  }
}


