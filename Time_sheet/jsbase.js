//For Updating log data dynamically
$(document).ready(()=>{
    $("button").click(()=>{
        var x = $("form").serializeArray();
        //no need to acces calendar date,search button so length-3
        for(let i=0;i<=(x.length-3);i++){
            console.log(x[i].value);
            //like a switch case
            if(i==0){
                document.getElementById("row3td1").innerHTML=x[i].value;}
            else if(i==1){
                document.getElementById("row3td2").innerHTML=x[i].value;}
            else if(i==2){
                document.getElementById("row3td3").innerHTML=x[i].value;}
            else if(i==3){
                document.getElementById("row3td4").innerHTML=x[i].value;}
        }
    });
});

//onclick on links doesn't seem to work or I have not tried well
/*
$(document).ready(()=>{  
    document.getElementById("row3edit").onclick(()=>{
      window.alert("Edit feature soon!");
  });
});
*/
/*
//when clicked on edit
$(document).ready(()=>{  
  $('row3edit').onclick(()=>{
      window.alert("Edit feature soon!")
  });
});
//when clicked on delete
$(document).ready(()=>{  
  $('row3del').onclick(()=>{
      window.alert("Sorry can't delete !")
  });
});
*/