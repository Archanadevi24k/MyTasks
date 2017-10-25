var myFruits=["Apple","Banana","Orange","PineApple","Guava","Lemon","Jackfruit","Mango","grapes"];

function displayfruits(){
    document.getElementById("display").innerHTML=myFruits;
}
function addfruit(){
    if(document.getElementById("add").value==""){
        alert("Enter any fruit");
    }
    else{
    myFruits.push(document.getElementById("add").value);
    displayfruits();
    }
    
}
function delfruit(){
    document.getElementById("removefruit").innerHTML=
        "<span style='color:blue;font-family:cursive'>" +myFruits[myFruits.length-1]+ "</span>" + " is deleted";
    myFruits.pop();
    displayfruits();
}
function shiftfruit(){
    document.getElementById("shift").innerHTML=
         "<span style='color:blue;font-family:cursive'>"+myFruits.shift() +"</span>" + " is deleted";
    displayfruits();
}
function unshiftfruit(){
    
    if(document.getElementById("unshift").value==""){
        alert("enter fruit name")
    }
    else{
    myFruits.unshift(document.getElementById("unshift").value);
    displayfruits();
    }
}
function removesplicefruit(){
    if(document.getElementById("position").value=="" && document.getElementById("numbers").value==""){
        alert("enter the value");
    }
    else{
      myFruits.splice(document.getElementById("position").value,document.getElementById("numbers").value);
    displayfruits();  
    }
}
function addbunch(){
    var myfavourite=["pomegrante","cherry","cucumber"];
    var allfruits= myFruits.concat(myfavourite);
    myFruits=allfruits;
    displayfruits();
}
function slicefruit(){
    if(document.getElementById("start").value=="" && document.getElementById("end").value==""){
        alert("enter the start and end value");
    }
    else{
   document.getElementById("slice").innerHTML= 
        myFruits.slice(document.getElementById("start").value,document.getElementById("end").value);
    displayfruits();
   }
}
function reversefruit(){
    myFruits.reverse();
    displayfruits();
}