/**
 * @param {number} n
 * @return {string[]}
 */

 /*
 Runtime
 71 ms
 Beats
 69.26%
 Memory
 44.4 MB
 Beats
 21.58%
 */


let n = 15

 var fizzBuzz = function(n) {
    let stringArray = []
    for (let index = 1; index <= n ; index++) {
    if(index % 3 == 0 && index % 5 == 0){stringArray.push('FizzBuzz')}
    else if(index % 3 == 0 ){stringArray.push('Fizz')}
    else if(index % 5 == 0){stringArray.push('Buzz')}
    else {stringArray.push(`${index}`)}
    }
    return stringArray
}


fizzBuzz(n)