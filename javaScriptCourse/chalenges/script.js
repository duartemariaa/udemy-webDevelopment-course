'use strict';

const arr = [17, 21, 23];

function printForecast(arr){
    for(let i=0; i<arr.length; i++){
        console.log(`${arr[i]}ºC in ${i+1} days ... `)
    }
}

printForecast(arr)