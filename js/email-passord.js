// step-1
document.getElementById("btn-more").addEventListener("click", function(){
    // step-2
  const setemail = document.getElementById("setemail");
  const useremail =setemail.value;
//    step-3
  const setpassord =document.getElementById('setpassord');
  const userpassord =setpassord.value;
  

  if (useremail === "sibomsaha@gmail.com" && userpassord === "00007") {
      window.location.href ="bank.html";
  } else {
    alert("tore passord vol")
  }
  
})