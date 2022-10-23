
//get elements into variable

var inputEl= document.getElementById("input");
var buttonEl= document.getElementById("btn");
var msgEl= document.getElementById("msg");



//  Events

buttonEl.onclick=function(){
    

    // get value from input

   var inputvalue = inputEl.value;
   //test it
   console.log(inputvalue);
 if(inputEl!=""){
    // put input value into P
   msgEl.innerHTML=inputvalue;

   // empty input value 
   inputEl.value="";
 }

   
}