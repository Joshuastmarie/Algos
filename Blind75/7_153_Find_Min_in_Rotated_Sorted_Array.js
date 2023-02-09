/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let rear = nums.length - 1;
    if (nums[rear] > nums[0] || nums.length == 1) return nums[0];
    for (let i = 0; i <= rear; i++) {
        let rear = nums.length - i;
        if (nums[i] < nums[i - 1]) return nums[i];
        if (nums[rear] < nums[rear - 1]) return nums[rear];
        rear = rear - 1;
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // let rear = nums.length - 1;
    if (nums[nums.length - 1] > nums[0] || nums.length == 1) return nums[0];
    for (let i = 0; i <= nums.length / 2; i++) {
        let rear = nums.length - i;
        if (nums[i] < nums[i - 1]) return nums[i];
        if (nums[rear] < nums[rear - 1]) return nums[rear];
        rear = rear - 1;
    }
};

// Binary Search  O(log of N)

var findMin = function (nums) {
    if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
    if (nums[nums.length - 1] < nums[nums.length - 2]) return nums[nums.length - 1];
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor(nums.length / 2);
    while (true) {
        if (nums[mid] < nums[mid - 1]) return nums[mid];
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
        if (nums[mid] > nums[left]) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((right + left) / 2);
    }
};