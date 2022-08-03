const me = {
    name: "JH",   
   age: 28,
   jobTitle: "Trainer"
}

const name = me.name;

name

const age = me.age;

age

const { jobTitle }  = me;

jobTitle

const { hairColour = "Black" } = me;

hairColour

const {name: myName} = me;

myName

function introduce(person) {
   console.log("Hello, my name is " + person.name);
}

introduce(me)

function introduce({name}) {
   console.log("Hello, my name is " + name);
}

introduce(me)

function introduce({name = "Barry"}) {
   console.log("Hello, my name is " + name);
}

introduce({})

function introduce({name = "Barry"}) {
   console.log(`Hello, my name is ${name}`);
}

introduce({})

const nums = [1,2,3,4,5,];

const [a, b, c, d] = nums;

a

b

c

d

const [e, f, , h] = nums;

e

f

h

const [num1, ...rest] = nums;

num1

rest

const nums2 = [6, 7, 8, 9, 10];

const [n1, ...other] = nums2;

other

console.log(nums)

console.log(...nums)

console.log(1,2,3,4,5)

const combined = [...nums, ...nums2];

combined

const intr = ({name}) => console.log(name);

intr(me)
