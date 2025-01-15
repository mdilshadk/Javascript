function palindrome(str) {
    let spl=str.split("");
    let rev=spl.reverse().join("");
    
    if(str===rev){
        console.log("palindrome");
        
    }
    else{
        console.log("not palindrome");
        
    }
    
}
const str="malayalam";
console.log(palindrome(str));