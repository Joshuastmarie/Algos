/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if(nums.length == 1) return nums[0];
    let max = nums[0], maxProd = nums[0], minProd = nums[0];
    for(let i = 1; i<nums.length; i++){
        let checker = [nums[i], nums[i] * minProd, nums[i] * maxProd]
        minProd = Math.min(...checker);
        maxProd = Math.max(...checker);

        max = Math.max(max, maxProd)
    }
    return max;
};