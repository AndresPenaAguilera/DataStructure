/*
https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place, do not return anything from your function.

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

*/

function duplicateZeros(nums) {
   if(nums.length===1) return nums;

   for(var i = 0; i< nums.length; i++) {
       
        if(nums[i]===0)
        {
            index = i+1;
            for (var x = nums.length-2; x >= index; x--)
            {
                nums[x + 1] = nums[x];
     		}
            
            if(index<nums.length)
            {
                nums[i+1]=0;
            }
            
            i+=1;
        }
   }

   return nums;
};

module.exports = duplicateZeros;