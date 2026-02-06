let sumEven = 0;
let numsum = 1;
let ProductOdd = 1;
let numOdd = 1;

while (numsum <=50) {
   if (numsum % 2 === 0 )
    sumEven += numsum;
    numsum++;
}
while (numOdd <=10) {
   if (numOdd % 2 != 0 )
    ProductOdd *= numOdd;
 numOdd++;
}

console.log(sumEven)
console.log(ProductOdd)

   