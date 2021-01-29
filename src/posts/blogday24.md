---
title: "Day 24"
---
import Layout from "../components/layout"

<Layout>

In the interest of taking 'er easy I only did some of the assigned JS exercises from my Turing pre-work. It was basically an introduction
to working with the developer tools in Chrome and using the console there to log out integers and strings. I'll post it down below but it's
pretty basic stuff. Devin pointed out that a month ago I didn't even know there were developer tools in Chrome and also I had no idea what
concatenation meant so I guess things are going well.

```JS
25
25
'this is my string'
"this is my string"
var myNewString = 'Hello Turing!';

myNewString
"Hello Turing!"
var myNum = 9;

var anotherString = 'How are you?';

anotherString;
"How are you?"
'Connect ' + 'these ' + 'strings.'
"Connect these strings."
myNewString + anotherString
"Hello Turing!How are you?"
5 > 3
true
5 < 3
false
"2" === 2
false
"2" == 2
true
if (8 < 9) {console.log('Hey!')}
VM754:1 Hey!

if (3 < 1){console.log('if block')} else {console.log("else block")}
VM918:1 else block


var numberOfChildren = 7;

var partnersName = 'Julio';

var geographicLocation = 'Brazil';

var jobTitle = 'fortune teller';

var fortune = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.'
console.log(fortune);
"You will be a fortune teller in Brazil, and married to Julio with 7 kids."

var currentYear = 2021
undefined
var birthYear = 1978

var youOld = currentYear - birthYear;

console.log('You are either ' + youOld + ' or ' + (youOld - 1));
VM1190:1 You are either 43 or 42


var currentAge = 42;
42
var maxAge = 92;
92
var amtPerDay = 2;
2
var restOfLifePerDay = (maxAge - currentAge) * amtPerDay
100
console.log('You will need ' + restOfLifePerDay + ' to last you until the ripe old age of ' + maxAge);
VM1763:1 You will need 100 to last you until the ripe old age of 92

```

See you tomorrow for day 25! A quarter of the way there!

</Layout>
