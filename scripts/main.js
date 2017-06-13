/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

var cards = {
"2": 2,
"3": 3,
"4": 4,
"5": 5,
"6": 6,
"7": 7,
"8": 8,
"9": 9,
"10": 10,
"J": 10,
"Q": 10,
"K": 10,
"A": 1,
"AA": 11,
}

var hand = ['2','J','Q']

// hand = the array of cards given as an input.
// first change the array to the values that are the object property
// then sum those
// if they equal less than 21 you're good.
// if they equal more than take any A in the hand array, change it to AA and then rerun

function handValue (hand) {
  const cardcalc = [];

for(i=0;i<hand.length;i++){
    var cardlookup = hand[i];
    var cardvalue = cards.cardlookup
    cardvalue.push(cardcalc)
  }
for(i=0;i<cardcalc.length;i++){
    var sum = parseint.cardcalc[i] + parseint.cardcalc[i+1]
}
if (sum >= 21){
  acereplace = hand.indexof('A')
  if (acereplace !== -1){
    hand[acereplace] = 'AA'
    handValue();
    return sum;
  }
}
else{
  return sum;
}
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
