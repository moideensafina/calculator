const intdisplay=document.getElementById("input");
function display(num){
    intdisplay.value+=num;
}
function total(num){
     try{
        intdisplay.value=eval(intdisplay.value)
     }
     catch(error){
        console.error("invalid");
     }
}
function Cclear(){
    intdisplay.value="";
}
function deletebtn(){
    intdisplay.value=intdisplay.value.slice(0,-1);
}