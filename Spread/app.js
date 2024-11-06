/*
    Spread được sử dụng để kết hợp nhiều mảng với nhau
*/

var arr1 = [1,2,3,4]
var arr2 = [2,3,4,5]

var arr3 = [...arr2, ...arr1]

console.log(arr3);

var object1 = {
    lastName: "Trung",
    age: 21
}

var object2 ={
    ...object1,
    lastName: "Manh"
}

console.log(object2);




