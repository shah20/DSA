// The removeElement function takes an array of integers (nums) and an integer value (val).
// The function's purpose is to remove all instances of val in the array nums in-place and return the new length of the array.
// In simpler terms, the function modifies the given array by shifting all elements that are not equal to val to the start of the array, and it returns the length of the array after the removal of val.

// Constraints:
// The array could have zero or more elements.
// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Parameters:
// nums: An array of integers, possibly containing duplicates.
// val: An integer value that needs to be removed from nums.

// Returns:
// The function returns an integer representing the new length of the array nums.

function myRemoveElement(num, val) {
    let pointer = 0;
    while(pointer < num.length) {
        if(num[pointer]===val) {
            for(let i = pointer; i < num.length - 1;i++){
                num[i] = num[i+1];
            }
            num.length = num.length - 1;
        } else {
            pointer++;
        }
    }
    return num.length;
}

function solRemoveElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}