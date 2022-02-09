console.log("Welcome to Star patter using JavaScript demo");

var numb = 5; // variable initialize for number of rows
var str = ''; // blank variable define to store pattern

for(var i=1; i<=numb; i++){ // external loop to print row
  
  for(var space=1; space<=numb-i; space++){ // internal loop for leave space
    str += ' '; // print blank space
  }
  
  for(var j=1; j<=2*i-1; j++){ // internal loop for star
    str += '*'; // print star (*) 
  }
  str += '\n' // new line
}

console.log(str); // console the output of star pattern
