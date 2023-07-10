const price=document.getElementById("price");
const button=document.querySelector("button");
const days=document.getElementById("days");
const rooms=document.getElementById("rooms");
const docker=document.getElementById("docker-input");
const ac=document.getElementById("ac-input");
const advance=document.getElementById("advance");
const roomcost=document.getElementById("room-cost")
const extra=document.getElementById("extra");
const balance=document.getElementById("balance");
const amenties=document.getElementById("amenties-cost");
console.log("hi");


button.addEventListener("click",(e)=>
{    const day=days.value;
    
    if(rooms.value==="delux")
    {
        roomcost.innerText=eval(2500*day);

    }
    else{
     roomcost.innerText=eval(4000*day);

    }
    

    if(ac.checked)
    {
        amenties.innerText=eval(1000*day);
    }
    else 
    {
           
        amenties.innerText=eval(300*day);
    }
    const roomcosts=roomcost.innerText;
    const amenty=amenties.innerText;

    if(extra.innerText>=2)
    {
        console.log("why");
     price.innerText=eval(roomcosts+"+"+amenty+"+"+1000+"*"+day);

    }
    balance.innerText=eval(price.innerText-advance.value);

    
    e.preventDefault();

})
