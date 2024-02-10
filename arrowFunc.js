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







