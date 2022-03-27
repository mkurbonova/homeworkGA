'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE
*/
const doornumber = ['12', '13', '16', '19', '39'];
const streetname = [
  'Edgemere rd',
  'Stearns hill rd',
  'Vila st',
  'Summer st',
  'Allied dr',
];
const cityname = ['Newton', 'Waltham', 'West Roxbury', 'Boston', 'Allston'];
const postcode = ['02132', '02451', '02453', '19971'];
const randomdoor = Math.floor(Math.random() * doornumber.length);
const randomstreet = Math.floor(Math.random() * streetname.length);
const randomcity = Math.floor(Math.random() * cityname.length);
const randompost = Math.floor(Math.random() * postcode.length);
console.log(
  (randomdoor, doornumber[randomdoor]),
  (randomstreet, streetname[randomstreet]),
  (randomcity, cityname[randomcity]),
  (randompost, postcode[randompost]),
);
