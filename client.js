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
    if(array[i].reviewRating <= 2){
      bonusPercentage = 0;
      totalBonus = 0;
      totalCompensation = Number(array[i].annualSalary);
    }else if(array[i].reviewRating = 3){
      bonusPercentage = 4;
      totalBonus = (Number(array[i].annualSalary) * (Number(bonusPercentage * 0.01)));
      totalCompensation = (Number(array[i].annualSalary) + Number(totalBonus));
    }else if(array[i].reviewRating = 4){
      bonusPercentage = 6;
      totalBonus = (Number(array[i].annualSalary) * (Number(bonusPercentage * 0.01)));
      totalCompensation = (Number(array[i].annualSalary) + Number(totalBonus));
    }else if(array[i].reviewRating = 5){
      bonusPercentage = 10;
      totalBonus = (Number(array[i].annualSalary) * (Number(bonusPercentage * 0.01)));
      totalCompensation = (Number(array[i].annualSalary) + Number(totalBonus));
    }else{
      console.log('Stuck on else');
    }

    let numLength = (array[i].employeeNumber + '').length;
    if(numLength == 4){
      bonusPercentage += 5;
    }

    if(array[i].annualSalary > 65000){
      bonusPercentage -= 1;
    }

    if(bonusPercentage > 13){
      bonusPercentage = 13;
    } 

    if(bonusPercentage < 0){
      bonusPercentage = 0;
    }

    let tempObj = {
      name: array[i].name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    }
    bonusArray.push(tempObj);
  }

}

bonusCalc( employees );
console.log( employees );
console.log( bonusArray);
