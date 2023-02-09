/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let j = i + 1;
        while (j < nums.length){
            if(nums[i] + nums[j] == target) {
                result.push(i)
                result.push(j)
                return result;
            }
            j++;
        }
    }
};

var twoSum = function (nums, target) {
    let result = [];
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if (map.hasOwnProperty(target - nums[i])){
            result.push(i);
            result.push(map[target - nums[i]])
            return result;
        }
        map[nums[i]] = i;
    }
};