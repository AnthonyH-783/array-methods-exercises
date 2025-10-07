/**
 * 1) Translate dashes to camel case
 * e.g. camelize("background-color") == 'backgroundColor';
 */
function camelize(str){
    if(str == null || str.length == 0){
        return;
    }
    let array = str.split("-");
    let mapped = array.slice(1).map(capitalize);
    mapped.unshift(array[0]);
    return mapped.join("");

}
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//console.log(camelize("background-color-works-well"));

/**
 * Write a function filterRange(arr, a, b) that gets an array arr,
 *  looks for elements with values higher or equal to a and lower 
 * or equal to b and return a result as an array.
 * The function should not modify the array. It should return the new array.
 */

let filterRange = (arr, a, b) => {

    let filtered = arr.filter(clamp(a,b));
    return filtered;

}

let clamp = (val_low, val_high) => {
    return function(element){
        return !(element < val_low) && !(element > val_high);
    }
}

let clamp2 = function (element, val_low, val_high){

        return !(element < val_low) && !(element > val_high)

}


//let arr = [5, 3, 8, 1];

//let filtered = filterRange(arr, 1, 4);
//console.log(filtered);
//console.log(arr);

/**
 * Write a function filterRangeInPlace(arr, a, b) that gets an array arr
 * and removes from it all values except those that are between a and b.
 *  The test is: a ≤ arr[i] ≤ b.
 *  The function should only modify the array. It should not return anything.
 */

let filterRangeInPlace = (arr, a, b) => {

    arr.forEach((element, index) => {
        if(!clamp2(element, a, b)){
            arr.splice(index, 1);
        }  
    });
}
//let arr = [5, 3, 8, 1];
//let in_place_filtered = filterRangeInPlace(arr, 1, 4);
//console.log(arr);

/**
 * Sort array in decreasing order
 */

let reverseInsertionSort = (arr) => {

    for(let i = 0; i < arr.length - 1; i++){
        let j = i + 1;
        while(j > 0 && arr[j] > arr[j - 1]){
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
}
let reverseSelectionSort = (arr) => {

    for(let i = 0; i < arr.length - 1; i++){
        let max = arr[i];
        
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > max){
                arr[i] = arr[j];
                arr[j] = max;
                max = arr[j];
            }
        }
    }
}

let b_isGreaterThan_a = (a, b) => {
    return b - a; // Negative 
}
//let arr = [5, 3, 8, 1];
//arr.sort(b_isGreaterThan_a)
//console.log(arr);

/**
 * We have an array of strings arr. We’d like to have a sorted copy of it,
 *  but keep arr unmodified. Create a function copySorted(arr) that returns such a copy.
 */

let copySorted = (arr) =>{
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
console.log(sorted);