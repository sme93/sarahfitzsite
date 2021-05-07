---
title: "Day 101"
---

import Layout from "../components/layout"

<Layout>

I finished up the first round of #100DaysofCode a few weeks ago and took a little break. If I start it up again today then
I should be finishing up right around the time when I'm done with Turing! My goals going through the challenge a second time around are as follows:

- Blog more consistently about what I'm learning (this is going to be a huge challenge)

- Practice array iterator methods like crazy, and especially practice coding out loud

- Flashcards or Codewars everyday

With that in mind, I'm putting up my blog entry today (check!) - I did a few codewars challenges and then watched a video about
execution contexts and scope. Here are a few things I jotted down from the video...

Global execution context
creation phase - has a window(global object)  
 this (window object)
variable declarations are assigned undefined
functions are placed into memory
execution phase - variables are assigned

Function execution context
same as global execution context except it creates and arguments object instead of the global object

Hoisting - the process of assigning a variable declaration of undefined during the creation phase
Execution stack - anytime a function is invoked a new execution context is created and added to the execution stack. When the function
finished running through the creation and the execution phase it gets popped off the execution stack.

Ok, all set for today. Have a good weekend!

</Layout>
