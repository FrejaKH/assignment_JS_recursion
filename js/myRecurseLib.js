// Task: Write a recursive function that calculates the factorial of a given natural number n

let naturalNumber = Number(prompt("Write a natural number"));
console.log(naturalNumber);

let n = Math.round(naturalNumber)
console.log(n);

let f = 1;

for (n; n >= 1; n--) {
    
    f = f*n;
}

console.log(f);




