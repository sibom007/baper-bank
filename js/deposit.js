document.getElementById("btnsetammount").addEventListener("click",function(){
    const getdepozt =document.getElementById('setdeposit');
    const newdepzt =getdepozt.value;
    const newdepositammound =parseFloat(newdepzt);
    
    
    


    const setdepositevalue =document.getElementById("setdepositvalue");
    const pvessdeposit = setdepositevalue.innerText;
    const setpvessdeposittonumber =parseFloat(pvessdeposit);
    const current =setpvessdeposittonumber + newdepositammound;
    setdepositevalue.innerText =current; 



    const getbalance =document.getElementById("balancetotal");
    const pvesbalance =getbalance.innerText;
    const setbalancenumber =parseFloat(pvesbalance);
    const currentbalancetotal =setbalancenumber + newdepositammound;
    getbalance.innerText =currentbalancetotal;

    getdepozt.value = '';
    
  

    
})