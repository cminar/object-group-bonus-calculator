const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let bonusArray = [];
function bonusCalc(array){
  for( i=0; i<array.length; i++ ){
    if(array.reviewRating <= 2){
      bonusPercentage = 0;
      totalBonus = 0;
      totalCompensation = array.annualSalary;
    }else if(array.reviewRating = 3){
      bonusPercentage = 4;
      totalBonus = array.annualSalary * (bonusPercentage * 0.01);
      totalCompensation = array.annualSalary + totalBonus;
    }else if(array.reviewRating = 4){
      bonusPercentage = 6;
      totalBonus = array.annualSalary * (bonusPercentage * 0.01);
      totalCompensation = array.annualSalary + totalBonus;
    }else if(array.reviewRating = 5){
      bonusPercentage = 10;
      totalBonus = array.annualSalary * (bonusPercentage * 0.01);
      totalCompensation = array.annualSalary + totalBonus;
    }else{
      console.log('Stuck on else');
    }


    if(employeeNumber.length == 4){
      bonusPercentage += 5;
    }

    if(array.annualSalary > 65000){
      bonusPercentage -= 1;
    }

    if(bonusPercentage > 13){
      bonusPercentage = 13;
    }

    if(bonusPercentage < 0){
      bonusPercentage = 0;
    }

  }

}

console.log( employees );
