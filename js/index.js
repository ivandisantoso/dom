// let btn = document.getElementById(`button`);


// btn.addEventListener("click",function(){
//     let u = document.getElementById("name").value;
//     let w = parseFloat(document.getElementById("weight").value);
// }



let button= document.getElementById("detBtn");
let calc = document.getElementById("calcBtn");
let calcGrade = document.getElementById("calcGradeBtn");



button.addEventListener("click",function(){

  let number = parseInt(document.getElementById("numberTxt").value);

  if(number % 2 ==0)
  {
    alert(`${number} is an even`)
  } 

  else
  {
    alert(`${number} is an odd`)
  }

});

calc.addEventListener("click",function(){
    let lbrFeeHour = 100;
    let minFee = 150;
    let nHour = parseInt(document.getElementById("nHourTxt").value);
    if (nHour == 1){
        alert(`Working hour is ${nHour} hour and Charge for the job is $ ${minFee}`);
    } else if (nHour > 1){
        totalFee = (nHour * lbrFeeHour) + minFee;
        alert(`Working hour is ${nHour} hour and Charge for the job is $ ${totalFee} `);
    } 
});

calcGrade.addEventListener("click",function(){
    let score = parseInt(document.getElementById("scoreTxt").value);
    switch (score){
        case >= 90:
            console.log();

    }
});

