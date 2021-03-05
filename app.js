// var contant = document.getElementById("contant");
// console.log("sara");
// var text = "welcome";
// document.getElementById("text").innerHTML=text;
// let text = "welcome in javaScript";
// text=text.toLowerCase();
// document.getElementById("text").innerHTML=text;
// console.log(text);

// let length=text.length;
// let indexOf= text.indexOf("i");
// document.getElementById("text").innerHTML=length;
// console.log(indexOf);

// let arr = ["sara",23 , "no"];
// console.log(arr);

// let data ={
//     name:"sara",
//     age:23,
//     cuntry:"jordan",
//     myFunction: function(){
//        return 10*10;
//     }
// };
// console.log(data.name);
// console.log(data.myFunction());

// let x = ["sara","judy","dana","alaa"];
// let ulEl = document.getElementById('unorder');
// for (let i=0;i<x.length;i++){
//     let liEl=document.createElement('li');
//     unorder.appendChild(liEl);
//     liEl.textContent=x[i];
// }

let user={
    user1:{name:"sara",age:23},
    user2:{name:"dana",age:24},
    user3:{name:"judy",age:25},
};


let table=document.getElementById('table');
function createTable(){
let trEl=document.createElement('tr');
let thEl=document.createElement('th');
table.appendChild(trEl);
trEl.appendChild(thEl);

thEl.textContent="Name" ;


let thEl2=document.createElement('th');

trEl.appendChild(thEl2);
thEl2.textContent="Age";

let trEl2=document.createElement('tr');
table.appendChild(trEl2);
let tdEl = document.createElement('td');
trEl2.appendChild(tdEl);
tdEl.textContent=user.user1.name;

let tdEl2 = document.createElement('td');
trEl2.appendChild(tdEl2);
tdEl2.textContent=user.user1.age;
}

createTable();