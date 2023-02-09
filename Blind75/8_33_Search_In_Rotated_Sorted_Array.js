/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if(nums.length == 1) return nums[0] == target? 0: -1;
    if (nums[0] == target) return 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] == target) return mid;
        if (nums[left] == target) return left;
        if (nums[right] == target) return right;
        if((target > nums[mid] && target > nums[right]) || (target > nums[mid] && nums[mid] > nums[right]) || (target < nums[mid] && target < nums[right])) left = mid+1;
        else if((target < nums[mid] && target > nums[left]) || (target < nums[mid] && nums[mid] > nums[left]) || (target > nums[mid] && target > nums[left])) right = mid-1;
        else break;
    }
    return -1;
};

let arr = [4,5,6,7,8,1,2,3]

console.log(search(arr, 8))