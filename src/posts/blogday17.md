---
title: "Day 17"
---
import Layout from "../components/layout"

<Layout>

Focusing on Javascript today, since I'm probably going to spend most of the weekend working with HTML and CSS, and I already am missing JS
after all of yesterday was spent trying to get my CSS to work. I did eventually figure out why it wasn't working, and now that I can see it I think it looks
pretty bad. Sad trombone.

So, continuing on with Objects - let's see if I can do some getters and setters.

Getters are methods that get and return the internal properties of an object. Advantages of using them include:
- Getters can perform an action on the data when getting a property
- Getters can return different values using conditionals
- In a getter, we can access the properties of the calling object using `this`
- The functionality of our code is easier for other developers to understand

Don't forget! Properties can't share the same name as the getter/setter function. A workaround for this would be to add an
underscore before the property name.

Here's an example of a getter method.

```JS
var blogAuthor = {
  _firstName: "Sarah",
  _lastName: "Fitz",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing information";
    }
  }
}
blogAuthor.fullName;
//  "Sarah Fitz"
```
Setter methods reassign values of existing properties within an object.

```JS
var myDesk = {
  design: "Mid Century Modern",
  drawers: 3,
  color: "brown",
  get numOfDrawers(){
    if(typeof this.drawers === "number"){
      return this.drawers;
    } else {
      return "Not valid number"
    }
  },
  set numOfDrawers(num) {
    if (typeof num === "number" && num >= 0)
  {
  this.drawers = num;
} else {
  console.log("Need a valid number.");
  }
  }
};
myDesk.numOfDrawers = 5;
console.log(myDesk.numOfDrawers);
//output 5
```
I'm going to hop off now and study some flashcards.

I listened to Elvis Costello while I was coding because he's the *very* best one.

</Layout>
