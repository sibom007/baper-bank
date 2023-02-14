document.getElementById("btn-withdrow").addEventListener("click",function(){
   const btnset =document.getElementById("withdrowammoubt");
   const newvalueadd =btnset.value;
   btnset.value ="";

   const newwithdrow =document.getElementById("setwithdrow");
   const setpvesswithdrow =newwithdrow.innerText;
   const currentwithdepget =parseFloat(setpvesswithdrow) + parseFloat(newvalueadd);
   newwithdrow.innerText =currentwithdepget;


   const withdrowbalance =document.getElementById("balancetotal")
   const withdrowbalancetext =withdrowbalance.innerText;
   const totalbalance =parseFloat(withdrowbalancetext) - newvalueadd;
   withdrowbalance.innerText =totalbalance;


   
})
