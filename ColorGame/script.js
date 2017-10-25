var favcolor,mycolor=[],favcolorposition,randomcolorposition,randomcolor,guess=0;
colors=["Aqua", "Blue", "Teal", "Orchid", "Coral", "Lime", "Chocolate", "Yellow", "Gold", "Olive", "Salmon", "DarkRed", "Khaki",  "FireBrick", "Silver"]; 
function do_game(){
    
     mycolor=colors.sort();
    
     var randomnum = Math.floor(Math.random() * mycolor.length);
     randomcolor=mycolor[randomnum];
    
     
      do
       {
        favcolor=prompt("please guess the color from the list below \n\n" +mycolor+"\n\n" +  "enter your favourite color","");
          if(favcolor==""||favcolor==null)
              {
                  alert("you didnt enter anything")
                  break;
              }
          favcolorposition= mycolor.indexOf(favcolor);
          randomcolorposition=mycolor.indexOf(randomcolor);
          guess++;
          if(favcolor==randomcolor)
             {
               alert("Found your "+favcolor+ " color in " +guess + " guess" );
             }
           else if(favcolorposition<0){
               alert("Enter color from the list");
              
           }
          else if(favcolorposition>randomcolorposition)
            {
               alert("your input is alphabetically higher than me"); 
            }
          else if(favcolorposition<randomcolorposition){
              alert("your input is alphabetically lower than me");
              }
           document.body.style.backgroundColor = randomcolor;
        }while(favcolor!==randomcolor);
    
          
}