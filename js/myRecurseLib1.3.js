// Task: Write a recursive function that calculates the n-th Fibonacci number.

/*
fibo(0) = 0;
fibo(1) = 1;

function fibo (arg) {

    if (arg === 0) {

    }
  
    return fibo(arg-1) + fibo(arg-2);

}

console.log(fibo());
*/


/* Funktion som først sætter værdierne fra num1 og num 2 ind, og fuldfører loopet. Herfter tilføjes de nye værdier til num1 og num2, som gør at tallene 
lægges sammen med det forrige resultat, så man får Fibonaccis tal*/

function fibonacci (n) {

    let num1 = 0;
    let num2 = 1;
    let next;

    for (let i = 2; i < n; i++){
        next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
    return next;
}

console.log(fibonacci(5));

// Task: Write a recursive function pow(r, e) that calculates r**e

function pow (r,e) {
    let power = r**e;
    return power;
}

console.log(pow(2,3));


// Task: Write a recursive function isPalindrome(s) that checks the string s for being a palindrome. It should return true if s is a palindrome, and false otherwise.

function isPalindrome (s){


    if (s.length <= 1) {
        return true;
    }

    // Det første udsagn nedenfor fortæller om en strings første bogstav er lig med en strings sidste bogstav 
    // Det andet udsagn nedenfor udvinder en strings fra andet til andensidste bogstav, og gør det til en ny string
    
    return s[0] === s[s.length -1] && isPalindrome(s.substring(1, s.length - 1));
}


console.log(isPalindrome('racecar'));