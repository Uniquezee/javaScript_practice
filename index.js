//Assignment
//1: Write a Javascript to compute the sum of the two given intergers. if the two values are same, then return triple their sum.
function intergers(n1,n2){
    var sum = n1+n2;
    if(n1 === n2){
       return sum*3 
    } else{
        return sum
    }
}
var sum = intergers(3,3);
console.log(sum)

//2: Write a Javascript program to check from two given intergers, whether one is positive and another one is negative.
var twoIntergers = [-3,-2,-1,0,1,2,3]
function value(){
    for(var i = 0; i<twoIntergers.length; i++){
        if( i>0 ){
             return "it is a positive number"
        }else {
            return "it is a negative number"
        }
    }
}
var result = value(3);
console.log(result)

/*function inter(n3,n4){
    while (inter < 0){
        return "it is positive"
    } else
}
inter(1,2)*/

function inter(n3,n4){
    if((n3 < 0 && n4 > 0) || n3 > 0 && n4 < 0){
        return "it is positive"
    } else {
        return "it is negative"
    }
}
console.log(inter(-1,1))
console.log(inter(1,2))
console.log(inter(2, -1))

//Question 3: Write A Javascript program to find the largest of three numbers
function largeNumbers(a,b,c){
    i = 0
    if( a > b){
        i = a
    } else {
        i = b
    } if (c > i){
        i = c
    } return i
}
console.log(largeNumbers(2,3,5))
console.log(largeNumbers(10,30,20))

//4) Write a JavaScript program to reverse the elements of a given array of intergers length 3
var array = [1,2,3,4,5]
let reversedArray = array.map(function(element,){
    array.length-1;
});
console.log(reversedArray)

function reversedArr(arr) {
    return arr.map((d,e,f) => f[(arr.length - 1)- e]);
}
console.log(reversedArr([1,2,3,4,5]))

//Question 5: Write a Javascript code to divide a given array of positive intergers into two parts. First element goes to fist part, second element goes to second part and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two
 function positiveIntergers(numbers){
     var result = [0, 0]
     for (var i = 0; i < numbers.length; i++){
          if(i % 2) 
         {result[1] += numbers[i];}
         else{
             result[0] += numbers[i];
         }
     }
     return result
 }
 console.log(positiveIntergers([1,1,1,3,5,6]))

 //Question 6: Write a Javascript function to check whether a string is blank or not. Test Data: console.log(is_black("")); console.log(is_blank('abc')); required output true false
 var is_Blank = function(string) {
     if(string.length === 0){
         return true;
     }else{
         return false;
     }
 }
 console.log(is_Blank(""));
 console.log(is_Blank('abc'))

 let books = [1, 2, 3, 4, 5, 6];
 var bookLength = (books.length/2);
 var numBooks = books.slice(0, bookLength);
 console.log(numBooks);
 var numBooks2 = books.slice(-bookLength);
 console.log(numBooks2)

//  // QUESTION 7: .using the concept of objects, create 10 students with the following attributes first name, last name, department, institution, age, level, registration num.
//   var tenStudents = {
//       firstStudent : {
//           firstName : "Chioma",
//           lastNmae : "Nwaoha",
//           department : "banking",
//           institution : "imsu",
//           age : 22,
//           level : 200,
//           registrationNumber : 057
//       },
//       secondStudent : {
//         firstName : "Chioma",
//         lastNmae : "Nwaoha",
//         department : "banking",
//         institution : "imsu",
//         age : 22,
//         level : 200,
//         registrationNumber : 057
//     },
//     thirdStudent : {
//         firstName : "Chioma",
//         lastNmae : "Nwaoha",
//         department : "banking",
//         institution : "imsu",
//         age : 22,
//         level : 200,
//         registrationNumber : 057
//     },
//   }
//   console.log(tenStudents)
// OR
var tenStudents = [
    {firstname: "Chioma", lastName: "Nwaoha", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:057},
    {firstname: "Chidimma", lastName: "Nwaoha", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:090},
    {firstname: "Anuri", lastName: "Oha", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:091},
    {firstname: "Ngozi", lastName: "Onyenwe", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:095},
    {firstname: "Onyeka", lastName: "Onu", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:050},
    {firstname: "Imade", lastName: "Onu", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:057},
    {firstname: "Kemisola", lastName: "Oyeleye", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:045},
    {firstname: "Omowumi", lastName: "Akintola", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:030},
    {firstname: "Ebube", lastName: "Onyem", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:070},
    {firstname: "Ebere", lastName: "Okonkwo", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:080},
    {firstname: "Onyinyechi", lastName: "Okeke", department: "Banking",institution: "Imsu", age: 22, level: 200, regNum:157},
];
 for (var i =0; i<tenStudents.length; i++) {
     console.log(tenStudents[i].firstname);
     console.log(tenStudents[i].lastName);
     console.log(tenStudents[i].department);
     console.log(tenStudents[i].institution);
     console.log(tenStudents[i].age);
     console.log(tenStudents[i].level);
     console.log(tenStudents[i].regNum);
     console.log("-------");
     console.log("New Student");
 };

 //let array =[2, 3,55,7,8,9] calculate the sum of the numbers in the array provided above
 var array = [2, 3, 55, 7, 8,9];
  sum = 0;
 for (var i = 0; i <array.length; i++ ){
     sum += array[i]
 }
console.log(sum);

//3 const newArray =[2,3,4,4,4,5].. write a function that wil return the double of the array provided above
const newArray = [2, 3, 4, 4, 4, 4, 5].map(function (n) {
    return n*2
})
console.log(newArray)
// 4:Create a function that takes the age in years and returns the age in days.

// Create a function that takes a string and returns the number (count) of vowels contained within it.

function vowels(count) {
    var voWell = "aeiouAEIOU";
    var vowellCount = 0;
    for(var i = 0; i < count.length; i++) {
        if (voWell.indexOf(count[i]) !== -1){
            vowellCount +=1;
        }
    }
    return vowellCount;
}
console.log(vowels("Amarchi is A Girl"));
//OR
function getCount(str) {
    var vowellCount = 0;
    const vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    for(var i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            vowellCount++
        }
    }
    return vowellCount
}
console.log(getCount("Amarachi"));