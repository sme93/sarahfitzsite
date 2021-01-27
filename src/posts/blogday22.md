---
title: "Day 22"
---
import Layout from "../components/layout"

<Layout>

I worked a little more with Classes this morning on Codecademy. I learned about inheritance and static methods.  

When multiple classes share properties or methods, they become candidates for inheritance. With inheritance, you can create a parent class (superclass)
with properties and methods that multiple child classes (subclasses) share. The child classes inherit the properties and methods from their parent class.

I'll create a parent class of Animal so that I can create child classes of Cat and Dog for my veterinary hospital.

```JS
class Animal {
  constructor(name, age, sex, breed, intact, weight) {
    this._name = name;
    this._age = age;
    this._sex = sex;
    this._breed = breed
    this._intact = intact;
    this._weight = weight;
  }
  get weight() {
    return this._weight;
  }
  spayNeuter() {
    return this._intact = false
  }
}
```
Now that my parent class is created, I can create the subclasses of Cat and Dog. I will use the keywords extends and super in my new subclasses.
```JS
class Dog extends Animal {
  constructor(name, age, sex, breed, intact, weight) {
    super(name, age, sex, breed, intact, weight);
  }
  runSize() {
    if (this._weight > 30) {
       return "Large";
     } else {
      return "Small";
    }
  }
}
var dogTuna = new Dog("Tuna", 9, "male", "Jack Russell/Bichon", false, 12)
console.log(dogTuna);
// output Dog {
//   _name: 'Tuna',
//   _age: 9,
//   _sex: 'male',
//   _breed: 'Jack Russell/Bichon',
//   _intact: false,
//   _weight: 12
// }
console.log(dogTuna.runSize());
//output Small
dogTuna.spayNeuter();
console.log(dogTuna._intact);
//output false
```
There are a couple of concepts around getters and setters and what exactly I need to do within the subclasses that I'm not clear on. I'm sure when I learn this stuff in school it will be more in depth and I can ask questions. Since I'm feeling a little frustrated I'm going to skip the static methods example and log off
for the day.

I listened to Drunk Tank Pink by shame and Preoccupations by Cassette while I was learning and coding today.

</Layout>
