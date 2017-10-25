


function elementoccurrence(){
      var mystr = document.getElementById("string").value;
      var arr = mystr.split('');
      var occ = [];
        for(var i=0;i<arr.length;i++){
          if(occ[arr[i]])
          {
           occ[arr[i]]++;
          }
         else 
         {
          occ[arr[i]] = 1;
         }
     }
    for(var i in occ)
    {
    alert('The charatcor '+i+' is found '+occ[i]+ 'times'); 
    }
}