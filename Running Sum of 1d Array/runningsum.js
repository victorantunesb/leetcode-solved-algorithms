
const nums = [1,2,3,4]

// var runningSum = function(nums) {
//     let arrayNumbers = []
//     let sumArray = []
//     let sumVar

//     for(let numbers of nums){
//         arrayNumbers.push(numbers)
//         if(arrayNumbers.length == 1){
//             sumArray.push(numbers)
//         }
//         else {arrayNumbers.reduce(function(ac,val){
//             return sumVar = ac += val
//         },)

//         sumArray.push(sumVar)
//         }}

//         return sumArray

// };




// console.log(runningSum(nums))

var runningSum = function(nums){
    let list = new Array(nums.length)
    list[0] = nums[0]
    for(let i = 1; i < nums.length; i++){
        list[i] = list[i-1] + nums[i]
        console.log(list[i])
        console.log(list[i-1])
        console.log(`nums`, nums[i])
    }
    return list
}

console.log(runningSum(nums))