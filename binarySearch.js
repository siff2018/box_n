/**
 *  Performs a binary search on a sorted  array to find the index of a target value
 * 
 *  @params {number[]} arr - The sorted array to search within
 *  @params {number} target - The value to search for in the array
 *  @returns {number} the index of the target value if found, otherwise -1.
 */

let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);

        // This is the part to find where to find the target!

        if(arr[mid] === target){
            return mid; // Target value found
        } else if (arr[mid] < target){
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // search in the left half
        }
    }

    return -1; // Target value not found
}


// Example usage:
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// const target = 9;
// const result = binarySearch(arr, target);
// if (result !== -1) {
//     console.log(`Target found at index: ${result}`);
// } else {
//     console.log("Target not found in the array.");
// }