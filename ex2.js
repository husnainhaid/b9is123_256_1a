//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

// Euler Problem #1
let euler1 = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert("Sum of multiples of 3 or 5 below 1000 is: " + sum);
};

let eulerCustom=()=>alert()