/*

Create a page where every time the user hits the "Roll Dice"
button, the screen randomly updates the two dice. Review the HTML and CSS code
included in the starter code. You will need to write only JavaScript 
code to complete this exercise.

1) Create code that does the following:
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first
  die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second
  die, secondDie
* get the first die by ID and update the CSS class name to firstDie
* get the first die by ID and update the CSS class name to secondDie

2) Create code that runs the function you created whenever the button with the
   ID value 'roll-dice' is clicked.

*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let vr1 = getRandomInt(1, 6);
let vr2 = getRandomInt(1, 6);
document.getElementById('roll-dice').addEventListener('click', function roll() {
  document.getElementById('first-die').className = `dice dice-${vr1}`;
  document.getElementById('second-die').className = `dice dice-${vr2}`;
});
