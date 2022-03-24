/*
  Write code that prints the lyrics to "99 Bottles of Beer on the Wall" to the
  console.
  If you're unfamiliar with the song, you can find the lyrics here:
  http://www.99-bottles-of-beer.net/lyrics.html.

  Be sure that all of your output includes proper spacing (no words or values
  running into each other).

  Hint: You can make your output appear on multiple lines by using the string '\n'
  to insert a line break.

  BONUS: For an extra challenge, improve this code to print "1 bottle" rather
  than "1 bottles" as well as the special lyrics for no bottles remaining (Hint:
  read up on if/else conditional statements at https://mdn.io/if...else).
*/

'use strict';
let x = 99;
while (x <= 99 && x != 1) {
  let n = x - 1;
  console.log(
    x +
      ' bottles of beer on the wall, ' +
      x +
      ' bottles of beer.\nTake one down and pass it around, ' +
      n +
      ' bottles of beer on the wall.',
  );
  x--;
}
console.log(
  'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.',
);
