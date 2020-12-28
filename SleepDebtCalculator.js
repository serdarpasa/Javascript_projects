const getSleepHours = day => {
  switch (day) {
   case 'monday':
    return 7
    break;
   case 'tuesday':
    return 8
    break; 
   case 'wednesday':
    return 8
    break;
   case'thursday':
    return 7
    break;
   case 'friday':
    return 7
    break;
   case 'saturday':
    return 8

   case 'sunday':
    return 10
    break;  
    default:
   return 'Error!';
  }
};

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');

const getIdealSleepHours = () =>{
let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const ActualSleepHours = getActualSleepHours();
  const IdealSleepHours = getIdealSleepHours();
  
  if(ActualSleepHours === IdealSleepHours)
   { console.log("You've got the perfect amount of sleep!");
   } else if(ActualSleepHours > IdealSleepHours)
     {console.log("You've got " + (ActualSleepHours - IdealSleepHours  ) + " more hours of sleep this week.");
     } else if(ActualSleepHours < IdealSleepHours) {
       console.log("You should get some rest, because you've slept " + (IdealSleepHours - ActualSleepHours) + " hours less than you should have this week.");
     }
  else {
    console.log("Error! Something went wrong, check your code.");
  }
};

calculateSleepDebt();
