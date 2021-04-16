'use strict';
<<<<<<< HEAD

=======
>>>>>>> 2a45f977155e8e651bcfd83a6b308fbaa4ec3e13
let userInput = prompt('whats your your name').toUpperCase();
alert('hello ' + userInput + ' I am delightful you are here!');

console.log('var name is ' + userInput);

let q1=prompt('have I ever been to america befor?'). toLocaleLowerCase();
const checkTravel= function(){
  if(q1 ==='yes'){
    alert('good :)');
<<<<<<< HEAD
    console.log('that sounds good :)');}
  else{
=======
    // console.log('that sounds good :)');}
  }else{
>>>>>>> 2a45f977155e8e651bcfd83a6b308fbaa4ec3e13
    alert('you got the right answer');
  }
};
checkTravel();


let q2=prompt('are I above 20?'). toLocaleLowerCase();
const checkAge = function(){
  if(q2 ==='yes'){
    alert('you got the right answer');
<<<<<<< HEAD
    console.log('right answer');
=======
    // console.log('right answer')
>>>>>>> 2a45f977155e8e651bcfd83a6b308fbaa4ec3e13
  }else{
    alert('wrong answer '+ userInput);
  }

};
checkAge();
<<<<<<< HEAD

let q3= prompt('do I live by my self?'). toLocaleLowerCase();
const checkLiving = function(){
  if(q3 ==='yes'){
    alert('cool');
    console.log('sad');
  }else{
    alert('right answer!');
    console.log('good');
  }
};
checkLiving();

let q4= prompt(' am I married?'). toLocaleLowerCase();
const feeling = function(){
  if(q4 ==='yes'){
    alert('wrong answer');
  }else{
    alert('cool');
  }
};
feeling();

let q5= prompt('do I know dancing?'). toLocaleLowerCase();
const fun = function(){
  if(q5 ==='yes'){
    alert('wrong answer!');
    console.log('oh yeah');
  }else{
    alert('nice answer!');
  }
};
fun();

=======

let q3= prompt('do I live by your self?'). toLocaleLowerCase();
const checkLiving = function(){
  if(q3 ==='yes'){
    alert('cool');
  // console.log('sad')
  }else{
    alert('wrong answer!');
  // console.log('good');
  }
};
checkLiving();

let q4= prompt(' am I married?'). toLocaleLowerCase();
const feeling = function(){
  if(q4 ==='yes'){
    alert('wrong answer');
  }else{
    alert('cool');
  }
};
feeling();

let q5= prompt('do I know dancing?'). toLocaleLowerCase();
const fun = function(){
  if(q5 ==='yes'){
    alert('wrong answer!');
  // console.log('oh yeah')
  }else{
    alert('nice answer!');
  }
};
fun();

>>>>>>> 2a45f977155e8e651bcfd83a6b308fbaa4ec3e13
let q6 =prompt('Try to guess the number in my mind , its between 50 & 60');
let checkNumber = function() {
  let i;
  for( i=1; i<4; i++){
    if(q6 ===57){
      alert('good job') ;
      break;
    }else if(q6>=58){
      alert('too high ');
      q6 =prompt('try again');
      console.log('correct answer is 57') ;
    }
    else if(q6<=56){
      alert('too low ..');
      q6 =prompt('try again');
      console.log('correct answer is 57');
    }
  }
  alert('the correct answer is 57');

};
checkNumber();



let q7 = prompt('you have 9 nominated movies try to guess my favourite one u have 6 attempts: avangers, black widow, US, Iron man, Hulk, superman,Batman,black cat,mission impossible fallout');
let movieName=['avangers', 'black widow', 'US', 'Iron man', 'Hulk', 'superman','Batman','black cat','mission impossible fallout'];
let i =0;
let checkFilms = function(){
  while(movieName[0]!==q7 && movieName[4] !==q7 && i<5 ){

    q7 = prompt('try again: avangers, black widow, US, Iron man, Hulk, superman,Batman,black cat,mission impossible fallout');
    i++;
  }

  alert('the correct answer is avangers');

<<<<<<< HEAD

=======
//   console.log('correct answer is avangers');
>>>>>>> 2a45f977155e8e651bcfd83a6b308fbaa4ec3e13
};
checkFilms();






let count= 0;
if (q1==='no') {count +=1;}
if(q2==='yes') {count +=1;}
if(q3==='no') {count +=1;}
if(q4==='no') {count +=1;}
if(q5==='no') {count +=1;}
if(q6==='57') {count +=1;}
if(q7==='avangers') {count +=1;}
alert('Mark=' +count+'/7');
