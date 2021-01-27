---
title: "Days 20 and 21"
---
import Layout from "../components/layout"

<Layout>

Yesterday was my 20th day in a row of coding! All the twitter bots were excited about it anyway. I wrote my Frozen Lake hiking post in HTML and then spent hours trying to style it with CSS. It really didn't go well, but what I have now is fine... I guess. I'm leaving it that way in any case. This morning I decided to try to style the hiking homepage and that went just about as well as yesterday. I'm moving on and doing some Javascript exercises.

Starting in on Classes in JS. Let's start off my making a class -

```JS
class Employee {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._tardiness = 0;
    }
}
```
Now we can make instances of our employee class -
```JS
var employeeSussman = new Employee("Sussman", "Grocery");
var employeeKristin = new Employee("Kristin", "Cheese");
var employeeRich = new Employee("Rich", "Receiving");
```
We can add getters and setters, and some methods to our class.
```JS
class Employee {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._tardiness = 0;
        this._remainingVacationDays = 5;
    }

    get name() {
        return this._name;
    }

    incrementTardiness() {
    this._tardiness++;
    }  

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

console.log(employeeSussman.name);
// output Sussman
employeeSussman.incrementTardiness(1);
employeeSussman.takeVacationDays(2);
console.log(employeeSussman);
//output Employee {
//   _name: 'Sussman',
//   _department: 'Grocery',
//   _tardiness: 1,
//   _remainingVacationDays: 3
// }
```

I listened to Lucky Leaves by Krill while I was coding today.

See you tomorrow.

</Layout>
