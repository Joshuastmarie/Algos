/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let ii = 0; ii < nums.length; ii++){
            if(ii == i) continue;
            product = product * nums[ii];
        }
        answer.push(product);
    }
    return answer;
};

var productExceptSelf = function(nums) {
    if (nums.length <= 1) return [];
    let leftProduct = 1;
    let rightProduct = 1;
    let answer = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return answer;
}
// T.C: O(N)
// S.C: O(1), assuming that we do not count the output array as extra space