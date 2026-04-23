//////section6//////
// Q1
let nickname = "ごっしー";
let age = 28;
console.log("私のニックネームは" + nickname + "です。" + "年齢は" + age + "歳です。")

// Q2
let language = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
let templetext = `私の好きな言語は${language[0]}です。次は${language[3]}を勉強してみたいです。`;

console.log("language[0]=>" + language[0]);
console.log("language[1]=>" + language[1]);
console.log("language[2]=>" + language[2]);
console.log("language[3]=>" + language[3]);
console.log("language[4]=>" + language[4]);

console.log(templetext);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q6
function sayhello(){
  console.log ("Hello");
}
sayhello();

let sayWorld = function() {
  console.log("World");
}
sayWorld();

// Q7
user.birthday = "2000-09-27";

user.sayhello = function() {
  console.log("Hello!");
}
user.sayhello();

//Q8
let calc = {
  add:function(x,y){
    console.log(x + y);
  },
  subtract:function(x,y){
    console.log(x - y);
  },        
  multiply:function(x,y){
    console.log(x * y);
  },
  divide:function(x,y){
    console.log(x / y);
  },
}

calc.add(2,5);
calc.subtract(20,10);
calc.multiply(7,7);
calc.divide(20,4);

//Q9 
function remainder(x,y) {
  return x % y;
}
let result = remainder(5,3);
console.log("５を３で割ったあまりは" + result + "です。");


//Q10
/*
function foo() {
  let x = 1;
}
console.log(x);

関数fooの中で定義されたx変数は、スコープの範囲外では参照できないため、エラーが発生する.
*/

//////section7//////
// Q1
let random = Math.floor(Math.random()*10); 
console.log(random);

// Q2
setTimeout(function() {
  console.log('Hello World!');
}, 3000);

// Q3
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

//Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
numbers.push(i);
} 
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}


