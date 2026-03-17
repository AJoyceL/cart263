const numbers = [1, 2, 3, 4, 5];

//anonymous function
const squaredNumbers = numbers.map(
    function (num) { 
        return(num * num)
    }
);
console.log(squaredNumbers);

//named funciton
// function mapSquares(num) {
//     return(num * num)
// }


//FILTER()
const strings_filter = ["banana", "oranges", "peppers", "tamatoes", "peas", "pears", "kiwi"];
const startsWithP = strings_filter.filter(
    function(str) {
    return  (str.startsWith("p"))
})
console.log(startsWithP);


/** REDUCE */
const numbers_n = [11, 2, 32, 4, 5,70];

const sum = numbers_n.reduce(
    function (accum, initval) 
    {
        return(accum + initval)
    },0)

console.log(sum);

//FOR EACH()
const nums = [12, 26, 37, 43, 52];
nums.forEach(function (num) {
  console.log(` nummmm: ${num * 2}`);
});


//FIND()
const numbers_toFind = [24,67,45,95];
const multipleOfFive = numbers_toFind.find(
    function(num) {
    return(num % 5 === 0)
});
console.log(multipleOfFive); 

//or

// const strings_toFind = ["hell","hello","today", "is", "wednesday", "hello"];
// const foundString = strings_toFind.find(
//     function(str) {
//     return(str.startsWith("h"))
//    // return(str.endsWith("ay"))
       
// });
// console.log(foundString)