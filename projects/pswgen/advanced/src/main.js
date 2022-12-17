function generatePassword() {
  var passwordLength = document.getElementById("passwordLength").value;
  var includeLowercase = document.getElementById("includeLowercase").checked;
  var includeUppercase = document.getElementById("includeUppercase").checked;
  var includeNumbers = document.getElementById("includeNumbers").checked;
  var includeSpecial = document.getElementById("includeSpecial").checked;
  var password = "";
  var characterSet = "";

  if (includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    characterSet += "0123456789";
  }
  if (includeSpecial) {
    characterSet += "!@#$%^&*()_+-=[]{}|';:/?.>,<";
  }
  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
}
  document.getElementById("password").value = password;
  document.getElementById("copysucccess").innerHTML = "&nbsp";

}

function copyPsw() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("copysucccess").innerHTML = "Copied to clipboard!";
}