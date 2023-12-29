// 1. Map Function : To transform each element of an array 
// into something else and return a new array of the same size.

const arr = [5, 1, 3, 2, 6];

const users = [
    { firstName: 'John', lastName: 'Doe', age: 18},
    { firstName: 'Jane', lastName: 'Doe', age: 16},
    { firstName: 'Tony', lastName: 'Stark', age: 45},
    { firstName: 'Thor', lastName: 'Odinson', age: 16}
];

// Double - [10, 2, 6, 4, 12]
function double(ele){
    return ele * 2;
}
const DoubleOutput = arr.map(double);
console.log(DoubleOutput);
// Triple - [15, 3, 9, 6, 18]
function triple(ele){
    return ele * 3;
}
const TripleOutput = arr.map(triple);
console.log(TripleOutput);

// Binary - ["101", "1", "11", "10", "110"]
function binary(ele){
    return ele.toString(2);
}
// First Method
const BinaryOutput = arr.map(binary);
// Second Method
const BinaryOutput2 = arr.map(function binary(ele){
    return ele.toString(2);
});
// Third Method
const BinaryOutput3 = arr.map(ele => ele.toString(2));
console.log(BinaryOutput3);


// 2. Filter Function : To filter out elements from an
// array based on a condition and return a new array.

// filter odd values
function oddvalue(ele){
    return ele % 2 == 1;
}
const OddValue = arr.filter(oddvalue);
console.log(OddValue);

// filter even values
function evenvalue(ele){
    return ele % 2 === 0;
}
const EvenValue = arr.filter(evenvalue);
console.log(EvenValue);

// Greater than 4 
const GT4 = arr.filter(ele => ele > 4);
console.log(GT4);

// 3. Reduce Function : To receive a function and return
// a single value.

// Sum
function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const Sum = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(Sum);

// Maximum value
function findMaxi(arr){
    let maxi = 0;
    for(let i=0;i<arr.length;i++){
        if(maxi < arr[i]){
            maxi = arr[i];
        }
    }
    return maxi;
}
console.log(findMaxi(arr));

const Maxi = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);
console.log(Maxi);


// List of Full names : map
const FullNames = users.map(function(user){
    return `${user.firstName} ${user.lastName}`;
});
console.log(FullNames);

// { 26 :2, 75:1, 50:1} : reduce function
const AgeMap = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(AgeMap);

// filter out the firstname of the users whose age is less than 30;
const FilterAge = users.filter((user)=> user.age < 30).map((user)=> user.firstName);
// console.log(FilterAge);

// By Using Reduce Function
const FilterAge2 = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(FilterAge2);
