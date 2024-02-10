// console.log("arrowFunc.js")

// ========================================================== Arrow functions (no parameters) => return
const num = () => {
    return 100- 9
}
// console.log(num())


// ========================================================== parameters devide with 17 any number 
const devider  = numer => {
    return  numer / 17;
}
// console.log(devider(20))



// ========================================================= Even or Odd 


const isEven = (numberOne, numberTwo) =>{
    const sumOne = numberOne + 7;
    const sumTwo = numberTwo + 5;
    const Total = sumOne + sumTwo;
    // console.log(Total)  //42
    
    if(Total % 2 === 0){
        return true;
    } else {
        return false;
    };
}

const result = isEven(10,20)
// console.log(result) //true



// ========================================================= MultiLine Arrow Func #print sum of array and Make is Square Root 

const array = [1,2,3,4,5,6]
const sumFunc = (allNum) => {
    sum = 0;
    for(const num of allNum){
        sum += num;
    }
    const square = Math.sqrt(sum)
    return square;
}
const squareRoot  = sumFunc(array);
// console.log(squareRoot) //4.58257569495584



// ========================================================= Use map Function. Wich are Retun Each Array devide by onk value 


const numberOfArr  = [ 14,2,3,4,54,6];
const returnableNum = numberOfArr.map( (num) => {
    return  num /7;
    })

// console.log(returnableNum)
/*  PRINT 
        [
          2,
          0.2857142857142857,
          0.42857142857142855,
          0.5714285714285714,
          7.714285714285714,
          0.8571428571428571
        ]

*/

numberOfArr.forEach((num)=> {
    // console.log(Array.isArray(num))
    /**
     * forEach Cant be Return,
     * its print type of number not array

     */
})

const getEvenInFilter = numberOfArr.filter((num)=> {
        return num % 2 === 0;
        /**
         * As Your Condition, The filter Return the same Array 
         * Loop all array
         * dont break what he find
         */
})
// console.log(getEvenInFilter)  //Print :: [ 14, 2, 4, 54, 6 ]

const getFindToArray = numberOfArr.find( (num) => {
    // console.log(num)
    return num < 3
    /**
     * it retun number
     * As Your Condition, The find Return the what is find
     * if is get your conditon , its break 
     */

})
// console.log(getFindToArray) // print :: 2 