/**
 * @param {number} num
 * @return {number}
 */

 /*
 Runtime
 49 ms
 Beats
 99.14%
 Memory
 42.2 MB
 Beats
 20.61%
 */


let num = 14

 var numberOfSteps = function(num) {
    let steps = 0;
    while (num != 0) {
        if(num % 2 != 0){
            num = num - 1;
            steps++
        }
        else {
            num = num / 2
            steps++
        }
    }
    return steps
};

numberOfSteps(num)