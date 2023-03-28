// console.log('Hello world !');
//map() and reduce() -> first argument callback function and 2nd argument is value of this
// var arr = [1,2,3,4,5,6,7,8,9];
// var anotherArr = [];
// for(let i = 0; i < arr.length; i++)
// {
//     anotherArr.push(arr[i]*arr[i]);
// }
// console.log(anotherArr);


// function getSquare(item)
// {
//     return item*item;
// }
// var newArr = arr.map(getSquare);
// console.log(newArr);

// var newArr = arr.map(function(item,index,arr){
//     console.log('Item: '+item+' and index:'+index+" array: "+arr)
// })

// const newArr = arr.map(item => item * 2);
// console.log(newArr);


//filter()
// var newFilter = arr.filter(function(newItem, index, arr){
//     return newItem > 2;
// })

// console.log(newFilter);


// var arr = [1, 2, 3, 4];
// var total = arr.reduce(function(sum, item){
//     return sum += item;
// },10)

// console.log(total);

// //this as a argument in map and filter
// const anoArray = [1, 2, 4, 5, 6, 7, 9, 3];
// const anObj = {
//     name: 'Zawad Ahmed',
//     age: 1
//  }
// anoArray.map(function(single, index, fullArr) {
//     console.log(this)
//  },anObj)



 //some method
//  const anArrSome = ['hello', 1, 2, 3, 'Bangla', 5, 'world', 7, 8, 9];
//  var newArr = anArrSome.some(function(anElement) {
//     return anElement === 9;
//  })

//  console.log(newArr);
// var newArr = anArrSome.some((currentElement, index, theArray) => {
//     console.log(currentElement);
//     console.log(index);
//     console.log(theArray);
//  });
//  console.log(newArr);


//using array with break statement
// var anArr = [1, 2, 4, 5, 6, 7, 8, 9];
// for(var i = 0; i < anArr.length; i++) {
//     console.log('Current Value: ' + anArr[i]);
//     if(anArr[i] === 5) {
//        break;
//     }
//  }

//without break statement 
// var newArr = anArr.some(anElement => {
//     console.log(`Current value: ${anElement}`);
//     return anElement === 5;
//  })
//  console.log(newArr);

 //some method in object
//  const objSome = [
//     {
//        name: 'Zawad Ahmed',
//        age: 1,
//        job: 'Child'
//     },{
//        name: 'Zobayer Ahmed',
//        age: 31,
//        job: 'Pharmacists'
//     },{
//        name: 'Zonayed Ahmed',
//        age: 21,
//        job: 'Student'
//     }
//  ]
//  var anList = objSome.some(anObj => anObj.age);
//  console.log(anList);

//every method

// const arrEvery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// var newArr = arrEvery.every(item => item === 1);
// console.log(newArr);


// const objEvery = [
//     {
//        name: 'Zawad Ahmed',
//        job: 'Child'
//     },{
//        name: 'Zobayer Ahmed',
//        age: 31,
//        job: 'Pharmacists'
//     },{
//        name: 'Zonayed Ahmed',
//        age: 21,
//        job: 'Student'
//     }
//  ]

// var newEvery =  objEvery.every(anObj => anObj.name);

// console.log(newEvery);