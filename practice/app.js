/* Q1
let nickname = "ごっしー";
let age = 28;
console.log("私のニックネームは" + name + "です。" + "年齢は" + age + "歳です。")

＝＝＝＝
name変数に”ごっしー”を代入
age変数に28を代入
consolelogでnameとageの変数の中身を表示

※let は変数を宣言するためのワードで、再定義ができない
constは定数で”中身の値”を変えられない
＝＝＝＝

// Q2
let language = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
let templetext = `私の好きな言語は${language[0]}です。次は${language[3]}を勉強してみたいです。`;
console.log(templetext);
console.log("language[0]=>" + language[0]);
console.log("language[1]=>" + language[1]);
console.log("language[2]=>" + language[2]);
console.log("language[3]=>" + language[3]);
console.log("language[4]=>" + language[4]);

＝＝＝＝
language変数にJS~Goを代入
templetext変数に、表示したい変数の値と文面を代入
今回はJSとPythonを表示させたいので、
language変数の、0から数えて0のJSと、3のPythonを表示させる
＝＝＝＝


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

＝＝＝＝
playerList変数に３つの値がある
３つの値からBobのfavoritesの2番目の要素を表示
＝＝＝＝

// Q5
let ages = [26, 33, 22];
console.log((ages[0] + ages[1] + ages[2]) / ages.length);

//Q6
function sayhello(){
  console.log ("Hello");
}
sayhello();

let sayWorld = function() {
  console.log("World");
}
sayWorld();

＝＝＝＝
sayhello関数を定義。
helloと表示されるようにする。
sayhello関数を呼び出す。

変数sayWorldに無名関数を定義。
worldと表示されるようにする。
sayWorld関数を呼び出す。  
＝＝＝＝


// Q7
user.birthday = "2000-09-27";
＝＝＝＝
user変数にbirthddayプロパティを追加して、2000-09-27の値を入れる 
＝＝＝＝

user.sayhello = function() {
  console.log("Hello!");
}
user.sayhello();
＝＝＝＝
user変数にsayhelloプロパティを追加して、Helloと表示される関数を定義する。
＝＝＝＝

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
＝＝＝＝
addメソッド：メソッドはオブジェクトの中にある関数
calc変数に、add、subtract、multiply、divideの4つのメソッドを定義する。
addは引数xとyを足して表示する。
subtractは引数xとyを引いて表示する。
multiplyは引数xとyを掛けて表示する。
divideは引数xとyを割って表示する。
＝＝＝＝

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


//section7
// Q1
let random = Math.floor(Math.random()*10); 
console.log(random);
＝＝＝＝
random変数に、0以上10未満のランダムな整数を代入する。
Match.floorが整数を表し、＊１０で１０未満の整数。
＝＝＝＝

// Q2
setTimeout(function() {
  console.log('Hello World!');
}, 3000);
＝＝＝＝
setTimeout関数を使って、３秒後に無名関数の中にあるが実行されるようにする。
＝＝＝＝

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
console.log(i);
}

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < 7; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}*/


