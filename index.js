// console.log("dax ")

// m = 8

// if(m<10){
//     console.log("need to focus")
// }else{
//     console.log("excellent")
// }

// var new_object = {key:"dax"}
// console.log(new_object)

// var new_array = [ 1,2,3,4,5,6,7,8,9]
// console.log(new_array)

// function for_loop(){
//     for(i=0 ; i<=10 ; i=i++){
//         console.log(i)
//     }
// }
// for_loop()



// 1. one method


A = 153

a = A.toString()
lenA = a.length;
char_of_A = a.split("")
let sum = 0;
for (let i of char_of_A ) {
    sum += (i) ** lenA; 
    console.log(i ** lenA)
}
console.log("Sum:", sum);
if (sum == A){
    console.log("it is an ARMSTRONG NUMBER")
}else{
    console.log("it is not an ARMSTRONG NUMBER")
}



// 2. 2nd method


function isArmstrongNumber(number) {
    let digits = Array.from(String(number), Number);
    let len = digits.length;
    let sum = 0;

    digits.forEach(function(digit) {
        sum += digit ** len;
    });

    if (sum === number) {
        console.log(number + " is an Armstrong number.");
    } else {
        console.log(number + " is not an Armstrong number.");
    }
}

isArmstrongNumber(370);
    




// 3.  last method to do this function



