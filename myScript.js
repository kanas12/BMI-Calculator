function bmi() {

  let weight = document.querySelector(".weight").value;
  let height = document.querySelector(".height").value;




  let num = (weight / (Math.pow(height, 2)));
  console.log(num)



  if (num < 18.5 && num > 0) {
      document.getElementById('output').innerHTML = `Your BMI is ${num}, so you are underweight`;
  } else if (num >= 18.5 && num <= 24.9) {
      document.getElementById('output').innerHTML = `Your BMI is ${num}, so you are normal weight`;
  } else if (num >= 25 && num <= 29.9) {
      document.getElementById('output').innerHTML = `Your BMI is ${num}, so you are overweight`;
  } else if (num >= 35 && num <= 40) {
      document.getElementById('output').innerHTML = `Your BMI is ${num} , so you are obese.`;
  } else if (num >= 45) {
      document.getElementById('output').innerHTML = `Your BMI is ${num} , so you are extremely obese.`;
  }

}