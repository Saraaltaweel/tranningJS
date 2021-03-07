// 'use strict'
// let total=[0,0,0,0,0,0];
// let hours=['8am','9am','10am','11am','12pm','1pm'];
// function cookie(location,min,max,avg){
//     this.location=location;
//     this.min-min;
//     this.max-max;
//     this.avg-avg;
//     this.cookiePerHour=[];
//     this.dailySales=0;

// }
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let divEl=document.getElementById('contaner');
// let tableEl=document.createElement('table');
// divEl.appendChild(tableEl);




// function header(){
// let trEl=document.createElement('tr');
// tableEl.appendChild(trEl);
// let thEl=document.createElement('th');
// trEl.appendChild(thEl);
// thEl.textContent='  ';

// let thEl2;
// for(let i=0; i<hours.length; i++){
// thEl2=document.createElement('th');
// trEl.appendChild(thEl2);
// thEl2.textContent=hours[i];
// }
// let thEl3=document.createElement('th');
// trEl.appendChild(thEl3);
// thEl3.textContent='Daily Sales';
// }
// header();



// cookie.prototype.render=function(){
// let trEl2=document.createElement('tr');
// tableEl.appendChild(trEl2);
// let thEl4=document.createElement('th');
// trEl2.appendChild(thEl4);
// thEl4.textContent=this.location;

// for (let i=0; i<hours.length; i++){
//     this.cookiePerHour.push(getRandomIntInclusive(this.min,this.max))*this.avg;
//     this.dailySales+=this.cookiePerHour[i];
//     total[i]+=this.cookiePerHour[i];

//     let tdEl=document.createElement('td');
//     trEl2.appendChild(tdEl);
//     tdEl.textContent=this.cookiePerHour[i];
// }
// let tdEl2=document.createElement('td');
// trEl2.appendChild(tdEl2);
// tdEl2.textContent=this.dailySales;

// }


// let seatle =new cookie('Seatle',23,65,6.3);
// seatle.render();

// function footer(){
//     let globleTotal=0;
   
//     let trEl3=document.createElement('tr');
//     tableEl.appendChild(trEl3);
//     let thEl5=document.createElement('th');
//     trEl3.appendChild(thEl5);
//     thEl5.textContent='Total';
//     let tdEl3;
//     for(let i=0; i<seatle.cookiePerHour.length;i++){
//         tdEl3=document.createElement('td');
//         trEl3.appendChild(tdEl3);
//         tdEl3.textContent=total[i];

//     }
// }

// footer();


'use strict';
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let countRow=1;
let container = document.getElementById('container');
let table = document.createElement('table');
contaner.appendChild(table); 
let hours=['8am','9am','10am','11am','12pm','1pm'];
let totalArr=[0,0,0,0,0,0];
function Cookie(location,min,max,avg){
    this.location=location;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.cookieperhour=[];
    this.dailysails=0;
}
function header(){
let trEl = document.createElement('tr');
table.appendChild(trEl);
let thEl =document.createElement('th');
trEl.appendChild(thEl);
thEl.textContent= ' ';
let thEl2;
for (let index = 0; index < hours.length; index++) {
    thEl2= document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent= hours[index];
}
let thEl3 =document.createElement('th');
trEl.appendChild(thEl3);
thEl3.textContent= 'daily Sails';
}
header();
Cookie.prototype.render=function (){
    countRow++;

    let tr2 =document.createElement('tr');
    table.appendChild(tr2);
    let th4 = document.createElement('th');
    tr2.appendChild(th4);
    th4.textContent = this.location;
    for (let i = 0; i < hours.length; i++) {
       this.cookieperhour.push(getRandomIntInclusive(this.min,this.max))*this.avg;
       this.dailysails += this.cookieperhour[i];
       totalArr[i] += this.cookieperhour[i];
       let td1 = document.createElement('td');
       tr2.appendChild(td1);
       td1.textContent=this.cookieperhour[i];
        }
        let td2 = document.createElement('td');
        tr2.appendChild(td2);
        td2.textContent=this.dailysails;
}
// render();
let seattle = new Cookie('seattle',23,65,6.3);
seattle.render();


function footer(){
 let globalTotal = 0;
 let tr3 = document.createElement('tr');
 table.appendChild(tr3);
 let th5 = document.createElement('th');
 tr3.appendChild(th5);
 th5.textContent= 'Total';
 let td3; 
 for (let x = 0; x < seattle.cookieperhour.length; x++) {
     td3 = document.createElement('td');
     tr3.appendChild(td3);
     td3.textContent= totalArr[x];

     globalTotal+=totalArr[x];
 }
 let td4=document.createElement('td');
 tr3.appendChild(td4);

 td4.textContent=globalTotal;
 
}
footer();

let button=document.getElementById('button');
button.addEventListener('click',clickButton);

function clickButton(event){
    event.preventDefault();
console.log(event);
    let location = event.target.location.value;
    let min = event.target.minCust;
    min=parseInt(min);
    let max = event.target.maxCust.value;
    max=parseInt(max);
    let avg = event.target.avgCust.value;
    avg=parseFloat(avg);

    let newLocation= new Cookie(location,min,max,avg);

    table.deleteRow(countRow);
    newLocation.render();
    footer();


}