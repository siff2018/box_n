let binarySearch = (arr, search) => {
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left + right)/ 2);

        // this is the part where we find the target

        if(arr[mid] == target){
            return mid;
        } else if(arr[mid] < target){
            left = mid + 1;
        }else{

            right = mid -1  // search in the left half
        }
        
    }
    return -1;  // target value not found
}
// sss

// in binary search

// field of variables
// left and right variables

// while scope left <= right

// conditional scope  arr[mid] === target

function binary(arr, target){
    // variable field
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        const mid = math.floor((left + right)/ 2)
        // find the target
        if(arr[mid] < target){
            return mid
        }
    }
}
