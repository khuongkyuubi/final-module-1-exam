function checkAmicable(num1, num2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i <= num1 / 2; i++) {
        if (num1 % i === 0) {
            sum1 += i;
        }
    }
    for (let j = 1; j <= num2 / 2; j++) {
        if (num2 % j === 0) {
            sum2 += j;
        }
    }
    return (sum1 === num2 && sum2 === num1);
}

// check with the first ten amicable pairs
console.log(checkAmicable(220, 284)); // true
console.log(checkAmicable(1184, 1210)); // true
console.log(checkAmicable(2620, 2924)); // true
console.log(checkAmicable(5020, 5564)); // true
console.log(checkAmicable(6232, 6368)); // true
console.log(checkAmicable(10744, 10856)); // true
console.log(checkAmicable(12285, 14595)); // true
console.log(checkAmicable(17296, 18416)); // true
console.log(checkAmicable(63020, 76084)); // true
console.log(checkAmicable(66928, 66992)); // true

// check with random number
console.log(checkAmicable(4354, 5656)); // false
console.log(checkAmicable(6928, 6768)); // false
console.log(checkAmicable(32434, 88798)); // false
console.log(checkAmicable(2343, 6787)); // false