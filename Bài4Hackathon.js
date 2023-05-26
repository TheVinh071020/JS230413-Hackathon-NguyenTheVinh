let arr = [3, 25, 38, 49, 12];
// Cách k dùng soft

// for (let i = 0; i < arr.length ; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);

//Cách dùng soft
arr.sort(function(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
console.log(arr);