Prime Number Checker//

var bf= true;
var pum =parseInt(prompt(""));
for (var b2=2; b2<10; b2++){
    var result= pum % b2;
    if (result==0){
        console.log("Number is nOt Prime " +pum);
        bf=false;   
        break;
   }
} 
if (bf){
   console.log("Number is Prime"+ num);
}

Prime Number//
