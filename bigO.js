//1. constant time O(1)
//linear time O(n)

//2. constant time O(1), one value one operation

//3. polynomial time, O(n^2) 2 levels of nested loops

//4. linear time O(n) performs an operation on each item directly proportional time

//5. linear time, O(n) checking every value 1 by one, O is dependant on length of array

//6. polynomial time, O(n^2) 2 levels of nested loops

//7. builds the fibonnaci sequence for the nth number, linear time O(n), 1 additional tick for each increment in number

//8.  logarithmic O(log(n)), cuts the array in half each time through

//9. constant time O(1) returns single element no matter size of array

//10. tells whether a number is prime or not, constant time O(n) time depends on size of number

//11. 

const hanoi = function (rods) {
  const numRods = rods.length
  const numDiscs = discs.length


}

let rods = []
let disc1 = ['-', '-', '-']
let disc2 = ['-', '-', '-', '-']
let disc3 = ['-', '-', '-', '-', '-']
let rodA = [disc1, disc2, disc3]
let rodB = []
let rodC = []

rods.push(disc1, disc2, disc3)
console.log('hanoi(rods)', hanoi(rods))
