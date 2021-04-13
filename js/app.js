'use strict'
let userInput = prompt('whats your your name').toUpperCase()
alert('hello ' + userInput + ' I am delightful you are here!');

console.log('var name is ' + userInput);

/*let q1=prompt('have you ever been to america befor?'). toLocaleLowerCase();
    if(q1=='yes'){
        alert('that sounds good :)');
        console.log('that sounds good :)');}
        //else{
        if(q1=='no'){ 
        alert('i advice you to visit it');
        }

 let q2=prompt('are you above 20?'). toLocaleLowerCase();
            if(q2=='yes'){
                alert('i think you are an adult now');
               // console.log('right answer')
            }else{
                    alert('you are stil a kid '+ userInput);
                   // console.log('not expected')
                }
let q3= prompt('do you live by your self?'). toLocaleLowerCase();
                if(q3=='yes'){
                    alert('hope you get to see your family soon');
                   // console.log('sad')
                }else{
                    alert('good!');
                   // console.log('good');
                }
let q4= prompt('have you ever cried?'); toLocaleLowerCase();
                if(q4='yes'){
                    alert('dont cry');
                }else{
                    alert('very  good');
                }
let q5= prompt('do you know dancing?'); toLocaleLowerCase();
                if(q5='yes'){
                    alert('nice answer!')
                   // console.log('oh yeah')
                }else{
                    alert('try to learn');
                    
                }*/

let q6 =prompt('Try to guess the number in my mind , its between 50 & 60');

let i;
for( i=1; i<4; i++){
if(q6==57){
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
 console.log('correct answer is 57')  
}
}
alert('the correct answer is 57');



//let movieName=['avangers', 'black widow', 'US', 'Iron man', 'Hulk', 'superman','Batman','black cat','mission impossible fallout'];

let q7 = prompt('you have 9 nominated movies try to guess my favourite one u have 6 attempts: avangers, black widow, US, Iron man, Hulk, superman,Batman,black cat,mission impossible fallout');

for (let i = 0; i < 6; i++) {
    if (q7 == 'avangers') {
        alert('good job') ;
    
        break;
    } else {
        alert('wrong answer ');
        q7 = prompt('try again: avangers, black widow, US, Iron man, Hulk, superman,Batman,black cat,mission impossible fallout');
        console.log('correct answer is avangers');


    }
}
alert('the correct answer is avangers');