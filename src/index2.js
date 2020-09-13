import "./styles.css";

var name = "Madhu";
var greeting = name + " Hello World";
console.log(greeting);

document.getElementById("app").innerHTML = `
<h1> ${greeting} </h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
/*
var a = "10";
console.log(a);
console.log(typeof a);

var result = "Rod has " + a + " years experience";
console.log(result);

var myExp = 10;
var yourExp = "10";
var combinedExp = myExp + yourExp;

console.log(combinedExp);

if (typeof myExp === "number" && typeof yourExp === "number") {
  console.log("Total Exp " + (myExp + yourExp));
} else {
  console.log("Incompatible types");
  console.log(Number(myExp) + Number(yourExp));
}

var yourExp2 = {
  java: 5,
  html: 10,
  css: 8
};

var yourExp3 = [12, 10, 20];

if (typeof yourExp2 === "object") {
  console.log("working with object");
  for (var propName in yourExp2) {
    console.log(yourExp2[propName]);
  }
}
if (Array.isArray(yourExp3)) {
  console.log("working with array");
  var arraySum = 0;
  //for (var i=0; i < yourExp3.length; i++){
  //  arraySum = arraySum + yourExp3[i];
  //}

  console.log(arraySum);
  console.log("test");
}

var a = 10;
var b = "10";
if (a == b) {
  //loose equality
  console.log("Yes");
}
if (a === b) {
  //strict equality
  console.log("Yes");
} else {
  console.log("No");
}

if (String(a) == b) {
  console.log("Yes");
}

if (a == Number(b)) {
  console.log("Yes");
}

//ternary operator
const isRaining = true;
const iShouldWearAJacket = isRaining ? "Yes" : "No";

const temp = 75;

switch (temp) {
  case 75:
    console.log("It's warm");
    break;

  case 95:
    console.log("It's hot");
    break;

  default:
    console.log("check the weather");
}

console.info("Info");
console.error("error");
console.warn("warning");
*/
///////////////////////////////////////////

// var a = "abc";
// var b = { p1: "def" };
// a = b;

// function modifyVals(a1, a2) {
//   console.log(a);
//   console.log(a1);
//   a1 = 6;
//   console.log(a1);
//   a2.p1 = "xyz";
// }

// modifyVals(a, b);
// console.log(a);
// console.log(b.p1);
///////////////////

// var aa = [{ p1: "value" }, "abdd"];

// function modVal(value) {
//   value = 1;
//   console.log(value);
// }

// modVal(aa[0]);
// console.log(aa);

////////////////////

var obj = {
  fname: "Madhu",
  lname: "Deshpande",
  phone: {
    home: 2234,
    office: 4543
  }
};

function doSomething(param) {
  //let myLocalCopy = { ...param };
  let myLocalCopy = Object.assign({}, param);
  myLocalCopy.fname = "Bob";
  myLocalCopy.phone.home = "5555";
  //param.fname = "Bob";
  return myLocalCopy;
}

console.log(obj);

const copyOfObj = { ...obj }; //Spread operator - shallow copy
const result = doSomething(copyOfObj);
console.log(obj);
console.log(result);

//deep copy
const copyOfObjDeep = JSON.parse(JSON.stringify(obj));

var copyOfObj2 = Object.assign({}, obj);
console.log(copyOfObj2);

/////////////////////////////////////////
