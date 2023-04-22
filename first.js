let day = "Holiday"
switch (day) {
    case'Monday':
        console.log("7am");
    case'Tuesday':
    console.log("11am");
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
    console.log("6am");
    case 'Saturday':
    console.log("7am");
    case 'Sunday':
    console.log("9am");
    default:
    console.log("7am - watch tv program");
}

function Aliens(name,tech) {
    this.firstName = name;
    this.tech = tech;
    this.work = function(){
        console.log("Solving bug from 10 hours");
    }
}

let alien1 = new Aliens ("Hope", "Java")
let alien2 = new Aliens ("Faith", "Android")

alien1.tech = "Blockchain";
console.log(alien1);
alien1.work();


function nums(num1,num2) {
    if (num1 > num2) {
        return num1
    } else(num1 < num2)
        return num2
}
let result = nums(117,556);
console.log(result);

let names = ["Peace", "Martin"]
names[2] = "Joy";
names[3] = "Mary";
for (let n of names) {
    console.log(n);
}

let values = [7,6,7];
console.log(values.push(30));
console.log(values.unshift(12));
console.log(values);

let numbers = [];
numbers[0] = 5;
numbers[99] = 9;
for (let n in numbers) {
    console.log(n);
}

let data = [9, "Luciana", {tech: 'JS'}, function (){console.log("Hello");}]
console.log(data);
data[3]();

let person = {
    name: "Rose",
    tech: "Front-end",
    work_exp: 4,
    laptop:{
        ram:4,
        cpu:"i8",
        brand:"Hp",
    }
}
console.log(person.laptop.brand);

// let numeral = [10,13,15,20];
// let [a,b,c,d] = numeral;
// console.log(a);

let e = 5;
let f = 6;

[e,f] = [f,e]

console.log(e,f);

let words = 'My name is Willian Mary Jane'.split(' ');
let [a,b,c,...d] = words;
console.log(d);
