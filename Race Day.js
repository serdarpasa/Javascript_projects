let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
if (age > 18 && registeredEarly){
  raceNumber += 1000;
}
if (age > 18 && registeredEarly){
  console.log(`Race will begin at 9.30. Your race number is: ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Race will begin at 11.00. Your race number is: ${raceNumber}.`);
}
else if (age < 18){
  console.log(`Race will begin at 12.30. Your race number is: ${raceNumber}.`);
}
else {
  console.log('Please approach the registration desk, thanks!');
}