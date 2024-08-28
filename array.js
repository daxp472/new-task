// question [1]
// let arr = [1,3,2,4,5,8,7]



// question - 1
 

// arr = [1,3,2,4,5,8,7]

let lan = 0
for(i=0; arr[i] != undefined; i++){
  lan = lan + 1
}
console.log(lan)





// question - 2


let arr = [1,3,2,4,5,8,7]
let temp = 0
let temp1 = 0


for(i=1; i<=8; i++ ){
    temp = temp + i
}
for(j=0; j<arr.length; j++ ) {
   temp1 = temp1 + arr[j]
}

b = temp - temp1
console.log(b)






// question 3


arr = [1, 3, 2, 4, 5, 8, 7];


for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);




// question 4 sort array with repitation



arr = [0,0,1,0,1,0,1]
count0 = 0;
count1 = 0;
arr1 = []

for(i=0;i<=arr.length;i++){
    if(arr[i]==0){
        count0+=1;
    }
}

for(j=0;j<=arr.length;j++){
    if(arr[j]==1){
        count1+=1
    }
}

for(k=1;k<=count0;k++){
    arr1.push(0)
}for(l=1;l<=count1;l++){
    arr1.push(1)
}
console.log(arr1)






// question 5 multiple number repetion multiple time



let arr = [0,0,2,1,2,0,0,1]
let count = 0;
let count1 = 0;
let count2 = 0;
let arr1 = []

for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        count += 1
    }
}

for(j=0;j<arr.length;j++){
    if(arr[j]==1){
        count1+=1
    }
}

for(k=0;k<=arr.length;k++){
    if(arr[k]==2){
        count2+=1
    }
}

for(l=1;l<=count;l++){
    arr1.push(0)
}for(m=1;m<=count1;m++){
    arr1.push(1)
}for(n=1;n<=count2;n++){
    arr1.push(2)
}
console.log(arr1)










// let arr = [1,3,2,4,5,8,7]

// function containsElement(arr, element) {
//     return arr.includes(element);
// }
// console.log(containsElement([1, 2, 3, 4, 5], 3));



// let arr = [1,3,2,4,5,8,7]

// arr.sort()
// console.log(arr)
