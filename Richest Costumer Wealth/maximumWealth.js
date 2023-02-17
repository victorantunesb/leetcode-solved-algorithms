/**
 * @param {number[][]} accounts
 * @return {number}
 */

 /*Runtime
 59 ms
 Beats
 87.37%
 Memory
 42.2 MB
 Beats
 48.42%
*/

let accounts = [[1,2,3],[3,2,1]]

 var maximumWealth = function(accounts) {
    let matrizAccounts = accounts
    let sumArray = []

    for(let index of matrizAccounts){        
        let sum = 0
        index.forEach(element => {
            sum += element
            return sum
            
        });
        sumArray.push(sum)
    }
    let max = Math.max(...sumArray)
    return max
};

maximumWealth(accounts)