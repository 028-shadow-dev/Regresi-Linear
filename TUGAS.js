// // input = [8,4,5]
// // output = [17 13 8]
// // index 0 = 8 + 4 + 5    /index0 + index1 + index2
// // index 1 = 8 + " " + 5 /index0 + index2
// // index 2 = 8          /index0
// function Hasil3(array){
//     let hasil = array;
//     console.log(`input: ${array}`);
//     let total1 = array.reduce((a, b) => a + b, 0);
//     // console.log(total);
//     // 8 + 4 + 5 = 17
//     array.splice(1,1);
//     // 8 + " " + 5
//     let total2 = array.reduce((a, b) => a + b, 0);
//     // 8 + 5 = 13
//     // console.log(total1);
//     array.splice(1,1);
//     // 
//     let total3 = array.reduce((a, b) => a + b, 0);
//     // console.log(total2);
//     hasil.splice(0,1, total1, total2, total3);
//     console.log(`output: ${hasil}`);
// }
// Hasil3([8, 4, 5]);

// // no 3
// //    output                               8,        4,       5,       7,      3
// // index 0 = 8 + 4  + 5   + 7  + 3      /index0 + index1 + index2 + index3 +index4
// // index 1 = 8 + 4  + ""  + 7  + 3     /index0 + index1 + index3 + index4
// // index 2 = 8 + 4  + ""  + "" + 3    /index0 + index1 + index4
// // index 3 = 8 + "" + ""  + ""  + 3  /index0 + index4
// // index 4 = 8                      /index0

function Hasil5(array) {
    let hasil = array;
    console.log(`input: ${array}`);
    let index0 = array.reduce((a,b) => a + b, 0); 
    // console.log(index0);
    array.splice(2,1);
    let index1 = array.reduce((a,b) => a + b, 0);
    array.splice(2,1);
    // console.log(index1);
    let index2 = array.reduce((a,b) => a + b, 0);
    // console.log(index2);
    array.splice(1,1)
    let index3 = array.reduce((a,b) => a + b, 0);
    // console.log(index3);
    array.splice(1,1)
    let index4 = array.reduce((a,b) => a + b, 0);
    // console.log(index4);
    hasil.splice(0,1, index0, index1, index2, index3, index4);
    console.log(`output: ${hasil}`);
}
Hasil5([8,4,5,7,3]);

// // function auto(array) {
// //     let hasil = array;
// //     let panjang = array.length;
// //     for (let i = 0; i < panjang; i++) {
// //         let index = array.reduce(function(a,b) { return a + b}, 0);
// //         var hasil1 = index;
// //         array.splice(1,1);
// //         return hasil1;
// //     }
// //     hasil = array.splice(1,1, hasil1);
// //     console.log(hasil);
// // }
// // auto([1,2,3,4]);  

// function auto(arr) {
//     let hasil = [];
//     let total = arr.reduce((a,b) => a+b,0);
//     for (let i = 0; i < arr.length; i++) {
//         hasil.push(total);
//         total -= arr[i];
//     }
//     // return hasil;
//     console.log(hasil);
// }
// auto([1,2,3,4]);

function auto(input) {
  const hasil = [];
  const total = temp.reduce((a, b) => a + b, 0); 
  for (let i = 0; i < input.length; i++) {
    const temp = input.filter((_, b) => b === 0 || b >= i + 1);
    const total = temp.reduce((a, b) => a + b, 0); 
    hasil.push(total);
  }

  return hasil;
}
// contoh
console.log(auto([1,2,0,1]));