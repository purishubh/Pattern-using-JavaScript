console.log("Welcome to Star patter using JavaScript demo");

var numb = 5; 
var str = ''; 

for(var i=1; i<=numb; i++){ 
  
  for(var space=1; space<=numb-i; space++){ 
    str += ' '; 
  }
  
  for(var j=1; j<=2*i-1; j++){ 
    str += '*';  
  }
  str += '\n' 
}

console.log(str); 
