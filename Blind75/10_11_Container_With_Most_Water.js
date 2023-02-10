/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length-1, mostWater = Math.min(height[i], height[j]) * (j - i);
    while(i<j){
        if(height[i]<height[j]) i++;
        else j--;
        mostWater = Math.max(mostWater, (Math.min(height[i], height[j]) * (j - i)));
    }
    return mostWater;
};