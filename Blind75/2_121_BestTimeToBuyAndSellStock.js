/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxReturn = 0;
    for(let i = 0; i < prices.length; i++){
        let j = i + 1;
        while (j < prices.length){
            if(prices[j] - prices[i] > maxReturn){
                maxReturn = prices[j] - prices[i];
                j++
                continue;
            }
            j++;
        }
    }
    return maxReturn;
};

