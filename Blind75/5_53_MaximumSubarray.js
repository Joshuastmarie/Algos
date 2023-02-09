/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    while (nums.length > 1){
        let maxSum = nums[0];
        for(let i = 0; i<nums.length; i++){
            let subSum = nums[i];
            if(subSum > maxSum) maxSum = subSum;
            for(let ii = i+1; ii<nums.length; ii++){
                subSum += nums[ii];
                if(subSum > maxSum) maxSum = subSum;
            }
        }
        return maxSum;
    }
    return nums[0];
};

let numsTest = [-2,1];

console.log(maxSubArray(numsTest))



var maxSubArray = function (nums) {
    if (nums.length == 1) return nums[0];
    let maxSum = nums[0], currentSum = nums[0];
    for(let i = 1; i<nums.length; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i])
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
