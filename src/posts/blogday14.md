---
title: "Days 11-14"
---
import Layout from "../components/layout"

<Layout>

I worked with HTML and CSS over the long weekend to make some minor changes to my website. Right now I'm
not happy with how it looks after making the changes and I'm feeling super frustrated that I don't
know enough about CSS to make it look better. It will get there eventually.

I added a hiking page to the website, which eventually will be photos and tales of my recent hikes. I'm
going to try to write it all out in HTML, instead of using Markdown like I'm doing with this blog.

My plans are to fix up the home page so that the coding and hiking sections are side by
side instead of vertical. I also need to format my coding blog posts so that they are
in order, and then eventually group them.

I spent my time this morning trying to figure out how to get another image on my homepage, which
eventually was successful. I haven't learned any React (this site is mostly React) so it was basically just
making a bunch of mistakes and then getting Devin to bail me out. I'm going to do a few Object JS exercises
for the rest of my learning time today.

Tomorrow I'm planning on starting the 7 day recommended pre-work from Turing. It looks like
I'll be learning about HTML and CSS, and I also want to do at least a few JS exercises every day too.
School officially starts in two weeks!

Moving on ....

The `this` keyword in JS references the calling object which provides access to the calling object's properties. We can use methods
inside of our objects using the `this` keyword. Here's an example...

```JS
var myiPhone = {
  model: 7,
  batteryLevel: 26,
  color: "black",
  lowPowerMode() {
    return "Current charge is " + this.batteryLevel + "%. Activate low power mode?"
  }
};


console.log(myiPhone.lowPowerMode());
//output Current charge is 26%. Activate low power mode?
```
If we did not use the `this` keyword we would have gotten back undefined. Another thing to note is that the
`this` keyword does not work with arrow functions, so use the old-school syntax when using the
`this` keyword.

Lots of changes to commit today. Gonna get to git. See you tomorrow.

Listened to Soccer Mommy (it hurts to type that name, ugh) and boygenius while I was working today.





</Layout>
