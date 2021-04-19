



// alert("+18");

function myFun(){


var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var lemin = document.getElementById("hadj");

 lemin.style.backgroundColor="red";
 lemin.style.textAlign="center";
 lemin.style.transition="all 1.8s ease-in-out";
 lemin.style.marginBottom="10px";
 lemin.style.padding="10px"

var text;

if(email.indexOf("@") == -1){

    text = "please Enter Valid Email";
    lemin.innerHTML =text;
    return false;
}else if(isNaN(phone)){
    text = "unvalid phone";
    lemin.innerHTML=text;
    return false;
}

else{
    alert("succes")
    return false;
};



}
// alert("+18");