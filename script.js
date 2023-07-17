let gridSize=16;
let clr=document.getElementsByName("clr")
function changenumber(){
    data=document.getElementById("number").value;
    let   content="";    
    for(let i=1;i<=data;i++){
       content=content+"<div> "+i+"</div>";
}  
document.getElementById("fcontainer").innerHTML=content;
   
}
function adddivs(){
    let   content="";    
    for(let i=1;i<=gridSize;i++){
       content=content+"<div> "+i+"</div>";
}  
document.getElementById("fcontainer").innerHTML=content;
}
 function changecolor(){
    if(clr="Red"){
      document.querySelector("div").style.backgroundColor="red";
    }
    if(clr="Blue"){
        document.querySelector("div").style.backgroundColor="blue";
    }
    else{
        document.querySelector("div").style.backgroundColor="green";
    }
 }






