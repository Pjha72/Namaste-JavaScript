// Q1 : Array squared valeus
const input = [1,2,3,4,5,6,7,8,9,10];
// output = [1,4,9,16,25,36,49,64,81,100]

const Squared = input.map(ele => ele ** 2);
console.log(Squared);


// Q2 : Sum of every positive element
const input2 = [-1,2,-3,4,-5,6,-7,8,-9,10];
const SumOfPositive = input2.filter((ele) => ele > 0).reduce((acc,ele)=> acc + ele,0);
console.log(SumOfPositive);

// Q3 : Calculate median and mean of the given array
const input3 = [12, 46, 32, 64];
// output = {mean: 38.5, median: 32}
const Mean = input3.reduce((acc,ele)=> acc+ele,0)/input3.length;
console.log(Mean);
const Median = input3.sort((a,b)=> a-b)[Math.floor(input3.length/2)];
console.log(Median);

// Second Method
const MeanAndMedian = input3.sort((a,b)=>a-b).reduce((acc,curr, idx, arr)=>{
    acc.mean += curr / arr.length;
    if(arr.length % 2 === 0){
        if(idx === arr.length/2-1){
            acc.median += curr;
        }
        else if(idx === arr.length/2){
            acc.median += curr;
            acc.median /= 2;
        }
    }
    else{
        if(idx === (arr.length-1)/2){
            acc.median = curr;
        }
    }
    return acc;
},{mean : 0, median : 0});
console.log(MeanAndMedian);

// Q4 : Age difference from the youngest and oldest
const input4 = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
];
// output = 54
const AgeDifference = input4.sort((a,b)=>a.age-b.age)[input4.length-1].age - input4.sort((a,b)=>a.age-b.age)[0].age;
console.log(AgeDifference);

const Age = input4.map((person)=>person.age);
[Math.min(...Age), Math.max(...Age), Math.max(...Age)-Math.min(...Age)];
console.log(Age);

// Q6 : n! with Map and Reduce
const input5 = 6;
// output = 720
const array = new Array(input5).fill(0);
const fact = array.map((ele,idx)=>idx+1).reduce((acc,ele)=>acc*ele,1);
console.log(fact);