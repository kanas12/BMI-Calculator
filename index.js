
function bmi(){

    let weight = document.querySelector(".weight").value;
    let height = document.querySelector(".height").value;

  
          let num = Math.round(weight/(Math.pow(height,2)).toFixed(2));

    
       if (result < 18.5){
             document.querySelector("#result").innerHTML = `Your BMI is ${num}, so you are underweight`;
           }
   
         else if (result >= 18.5 && result < 24.9) {
            document.querySelector("#result").innerHTML = `Your BMI is ${num}, so you are normal weight`;
          }

        else{
           document.querySelector("#result").innerHTML = `Your BMI is ${num}, so you are overweight`;
         }
     
     }


 

 66666666666