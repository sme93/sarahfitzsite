---
title: "Day 42"
---
import Layout from "../components/layout"

<Layout>

Almost getting to the halfway point if the 100 days of code project! I haven't been doing blog posts for the last few days because they've been super hectic - but I've been tweeting about what I've been up to.

First, here's the link to my completed partner project. https://sme93.github.io/hang-in-there-boilerplate/ Check it out! You can create random motivational posters, make your own poster, add posters to a saved posters page and also delete posters by double-clicking on them.

I've been working through an assortment of "Mythical Creatures" testing files that were given to us to work on. We are given the written tests and then we need to write code to make the tests pass. It's just getting practice with Classes, but some of them are really difficult. I'll post some of them here -

```JS
class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = magician.clothing || "top hat";
    this.confidencePercentage = 10;
    this.assistant = magician.assistant;
  }
  performIncantation(phrase) {
    return phrase.toUpperCase() + "!";
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT"
    }
      return "PULL DOVE FROM SLEEVE"
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return "WOW! The magician totally just sawed that person in half!";
    }
     return "Oh no, this trick is not ready!";
  }
}
```
This magician was the first one I was able to do without looking up how to do something or asking Devin for help 🤓
 ```JS
 class Human {
  constructor(name) {
    this.name =  name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    }
    this.snowman = undefined;
  }

  gatherMaterials(material, increaseValue) {
      this.materials[material] += increaseValue;
  }

  buildASnowman() {
    var instanceOfSnowman = {
      coal: this.materials.coal,
      carrots: this.materials.carrots,
      snowballs: this.materials.snowballs,
      buttons: this.materials.buttons,
    }
    this.snowman = new Snowman(instanceOfSnowman);

    return this.snowman;
  }

  placeMagicHat() {
    //console.log(this.snowman);
    if (this.snowman.magicHat) {
    return `Woah, this snowman is coming to life!`
  } else {
    return `I guess I didn\'t build it correctly.`
  }

  }
}
```
I had nightmares about that one.

Ok, I have to go work on more Mythical Creatures because I am being tested tomorrow.

I have been listening to Aimee Mann today while coding.
🧠   🧠   🧠   🧠

</Layout>
