'use strict';
let number=prompt("Enter the number");
let arr=[];
for(let num=0;num<=number;num++)
{
    if(num % 5 == 0){
        arr.push(num);
    }   
}
if(arr.length != 0)
{
        console.log(arr);
}
else{ 
        console.log('Sorry, no numbers');
}