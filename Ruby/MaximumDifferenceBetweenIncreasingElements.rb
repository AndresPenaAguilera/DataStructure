=begin
https://leetcode.com/problems/maximum-difference-between-increasing-elements/

Given a 0-indexed integer array nums of size n, 
find the maximum difference between nums[i] and nums[j]
 (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
Return the maximum difference. If no such i and j exists, return -1

Input: nums = [7,1,5,4]
Output: 4
Explanation:
The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.

Input: nums = [9,4,3,2]
Output: -1
Explanation:
There is no i and j such that i < j and nums[i] < nums[j].
=end

def maximum_difference(nums)
    
    less=0;
    value = 0;
    difference=0;
    
    nums.each_with_index{|valueArray, i|
       
        if nums[less]<valueArray

            difference = valueArray-nums[less];
            
            if value<difference
                value=difference
            end
        else
           less=i;
        end  
    } 
    
     if value>0
          return value
     end
    
    return -1;
        
end