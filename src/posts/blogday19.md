---
title: "Days 18 and 19"
---
import Layout from "../components/layout"

<Layout>

It's the freakin weekend, guys. I spent a few hours yesterday making my website look pretty. I worked mainly with CSS
to style the homepage - moving up the hiking section so it's next to the coding section. Then I worked with Javascript to
keep all my blog posts in order since they were showing up all weird. I also switched out the favicon and website description. If you
were wondering, my favicon was done by this chick named Meech (@Meechity) who I met through twitter a million years ago. She's an awesome artist.
I also added the hiking page I did the other day in HTML to the hiking section. I didn't end up using any of the CSS I wrote for that post, it's
pretty much just in it's bare HTML state at the moment.  

I'm just going to do a few JS exercises today, then do my flashcards so I can keep the flashcard trend going (4 days in a row if I do it today).

Factory Functions return an object and can be reused to make multiple object instances. They can also have parameters allowing us to customize the object that
gets returned.

I'm going to use the same example in Codecademy for doing factory functions, because who doesn't want to make a monster factory?

```JS
var monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log((catchPhrase));
    }
  }
};
```
To make an object that represents a specific monster we can call monsterFactory with the necessary arguments and assign the
return value to a new variable.

```JS
var vampire = monsterFactory("Spike", "126 years", "blood", "A little less ritual, and a little more fun.");
vampire.scare();
//output "A little less ritual, and a little more fun.""

var zombie = monsterFactory("Zed", "5 minutes", "brains", "Arrrrrggggghhhhh");
zombie.scare();
//output "Arrrrrggggghhhhh"
```
We can use a destructuring technique called property value shorthand to save some time making factory functions. The following example is
our monsterFactory function but using property value shorthand.

```JS
function monsterFactory(name, age, energySource, catchPhrase){
  return {
    name,
    age,
    energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
}

var vampire = monsterFactory("Dracula", "200 years", "blood", "I vant to suck your blood!");
console.log(vampire.energySource);
//output blood
vampire.scare();
//output "I vant to suck your blood!"
```

Ok, I'm going to go do some flashcards before I run out of steam.

I listened to Aimee Mann's Mental Illness while I was coding today.
</Layout>
