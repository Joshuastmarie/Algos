/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = [];
    if (nums.length < 3) return answer;
    let newNums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if(i>0 && newNums[i-1] == newNums[i]) continue;
        let j=i+1, k=newNums.length-1;
        while(j < k){
            let threeSum = nums[i] + nums[j] + nums[k];
            if (threeSum == 0) {
                answer.push([nums[i], nums[j], nums[k]]);
                j++
                while(newNums[j] == newNums[j-1] && j < k) j++;
            } 
            else if (threeSum > 0) k--;
            else j++;
        }
    }
    return answer;
};