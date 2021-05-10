---
title: "Day 104"
---

import Layout from "../components/layout"

<Layout>

Deep dive into testing today - our first project of the mod is writing tests to make a flashcards game work in our server.
Here are some notes from the testing lesson. Once I've written these out I have to get to work on actually writing the tests
for my project.

Structure of a Test

- Setup - variables or other information for the test
- Execution - run appropriate function that execute the behaviour indicated from the test title
- Assertion - verify we end up with what we expect

A describe block groups related tests together.
The it block contains the context of each specific test. Using "should" is good practice.

What makes a good test?

- test one thing
- do not have control flow statements - if, when, for
- can be used as documentation for the code they test
- are clear and easy to read

The coding school I'm attending is big on beforeEach hooks in testing, and to that end I will post this article...

(https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)

</Layout>
