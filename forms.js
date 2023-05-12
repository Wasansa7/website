function chkPass (){

var init =document.getElementById("iPassword");

var sec =document.getElementById("sPassword");

if (init.value =="")

{

alert ("please enter your passord");

return false;

}

if (init.value != sec.value)

{

alert ("The Passwords dont mach, please check your passords");

return false;

}

else return true;

}

document.getElementById("sPassword").onblur= chkPass;

document.getElementById("myForm").onsubmit = chkPass;

function load ()

{

alert (" Welcome, please fill the form");

}

