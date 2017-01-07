var myName = "Serkan";

var myFunction = function () {
    var name = prompt("What's your name?");
    alert("Hello" + name);
}
/*
var loginID = prompt("what's your login ID?");

    if(loginID<50){
    alert("the number is less than 50");
    } else{
        alert("the number is greater than 50");
    }
*/
var largenumber = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
var sortnumber = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            alert(num1 + "," + num2 + "," + num3);
        }
        else {
            alert(num1 + "," + num3 + "," + num2)
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            alert(num2 + "," + num1 + "," + num3);
        } else {
            alert(num2 + "," + num3 + "," + num1);
        }
    } else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            alert(num3 + "," + num1 + "," + num2);
        }
    }
}


a = 5;
b = 8;
c = 2;
d = -2;
e = 22;

var largestNumber = function (a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        alert(a + "is the largest number");
    }
    else if (b > a && b > c && b > d && b > e) {
        alert(b + "is the largest number");
    }
    else if (c > a && c > b && c > d && c > e) {
        alert(c + "is the largest number");
    }
    else if (d > a && d > b && d > c && d > e) {
        alert(d + " is largest number");
    }
    else {
        alert(e + "is the largest number");
    }
}


// Write a JavaScript program which iterates the integers from 1 to 100. 
//But for multiples ofthree print "Fizz" instead of the number and 
//for the multiples of five print "Buzz". For 
//numbers which are multiples of both three and five print "FizzBuzz".

var problem4 = function () {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + "Fizzbuzz");
        }

        else if (i % 3 === 0) {
            console.log(i + "Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + "Buzz");
        } else {
            console.log(i);
        }
    }
}


// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the
// current number is odd or even, and display a message to the screen.

var problem5 = function () {
    for (var i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even number");
        }
        else {
            console.log(i + "is odd number");
        }
    }
}

//Write a function to count how many numbers between 
//1 and 1000 are divisible by 3 with noremainder
var problem7 = function () {
    var total = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 === 0) {
            total += i;
        }
        console.log(total);
    }
}

var treeProblem = function(size){
    for(var i = 1; i <= size; i++){
        var row = '';

        for(var k = size - i; k > 0; k--){
            row += ' ';
        }

        for(var j = 1; j <= i; j++){
            row += j;
        }

        console.log(row);
    }
}

var problem8 = function(shape){
    for(var i =0; i<shape; i++ ){   //rows going up to the widest
        var row = "";
        for(var m = 1; m < shape- i ; m++){
            row +="";
        }
        // insert numbers ascending
        for(var k =1; k<=i+1; k++){
            row += k;
        }
        //insert numbers
        for(var o = i; o>0; o-- ){
            row +="";
        }
        console.log(i);
    }
    for(var j=shape-2; j>=0; j--){   //rows going down from the widest
       var row2 = "";
       for(var n = 1; n < shape-j; n++){
           row2 +="";
       }
       // insert numbers ascending
       for(var d = 1; d <= j+1; d++){
           row2 += d;
       }
       for (var p = j; p>0; p--){
           row2 +="";
       }
        console.log(row2);
    }
}



var car = {
    make: "Tesla",
    model: "S",
    year: 2015,
    miles: 45,
    battery:100,

    charge: function(){
        this.battery = 100;
    },
    drive: function(miles){
        if(this.battery){
        this.miles +=miles;
        this.battery -= (miles/2.6);

    }
    else{
        alert("Please charge your Tesla s" + "" + this.model);
    }
} 
}


var person = {
    name: "Serkan",
    age: 29,
    gender:"Male",
}
var employee = {
    name:"Ali",
    idNumber:12,
    title:"Professor",

    login: function(){
        this.idNumber +=name;

    }
}


function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.miles = 0;
    this.battery = 100;
}
Car.prototype.charge = function(){
    this.batter = 100;
}

Car.prototype.drive

   //first Q1 

 function getCurrentDate(){
 var date = new Date();
}

 

  

  //Write a function to return if the given year is a leap year.  
 // A year is leap if it is divisible by 4,
 // but not divisible 100, unless it is also divisible by 400.

 
 var year = function(){ 
     
   if(year % 4 === 0){
       alert("It's a leap year");
 }  
    else if ( year %100 !== 0 && year %400 === 0) {
       alert( year + "" + "its a leap year");
   } else{
       alert(year + "" + "It's not a leap year" );
   }
   
}

 //An array contains 5 numbers. Write a function to check to see
 // if all 5 numbers are consecutive numbers ( 1,2,3,4,5)

 
   var numbers =[1,2,3,4,5]
   for(var i = 1; i <=5; i++){
   }
   
    //Write a function to check an array of numbers to see 
    //if it contains the same number multipletimes.

   var same = [1,4,6,8,4,5,1,2,4,9,2];
    for (var i =0; i< same.length; i++){
    
        }
 
   // Write a JavaScript function to get the first element of an array. 
   // Passing a parameter 'n' will return the first 'n' elements of the array

   var firstElement = function(array, n){
     
     if(array===null){
         return }
    if(n===null){
       return array[0]; 
     } elseif(n<0) 
   }
  
 //Write a simple JavaScript program to join all 
 //elements of the following array into a string.

function joinColor(colors){
    var result = "";
     for( var i = 0; i<colors.length; i++) 
     }
  }


