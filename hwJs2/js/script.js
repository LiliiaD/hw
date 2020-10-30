//Task 1

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(arr);

//Task 2

//const arrNum = [2, 9, 1, 0, 7];
//console.log(arrNum);

//Task 3

//const arrStr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//console.log(arrStr);

//Task 4 

//const arrMix = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 2, 9, 1, 0, 7, true, false];
//console.log(arrMix);

//Task 5

//const arrEmpty = [];
//arrEmpty[0] = 7;
//arrEmpty[1] = 5;
//arrEmpty[2] = 3;
//arrEmpty[3] = 1;
//console.log(arrEmpty);

//Task 6

//for (let i = 1; i <= 10; i++) {
//    document.write('<div>js task</div>')
//};

//Task 6 

//for (let i = 1; i <= 10; i++) {
//    document.write('<div>js task</div>');
//    document.write(i);
//}

//Task 7

//let i = 1;
// while (i <= 20) {
//     i++;
//     document.write('<h1>hello</h1>');
// }

 //Task 8

//let i = 0; 

//while (i < 20) {
//    i++;
//    document.write(i);
//    document.write('<h1>hello</h1>');
//}

//Task 9

//const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for (let i = 0; i < arrNumbers.length; i++) {
//    console.log(arrNumbers[i])
//}

//Task 10

//const arrStrings = ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];

//for (let i = 0; i < arrStrings.length; i++) {
//    console.log(arrStrings[i])
//}

//Task 11

//const names = ['Nazar', 'Max', 'Andriy', 'Oleg', 'Igor', 'Anna', 'Maria', 'Stefaniya', 'Olga', 'Oksana'];

//for (let i = 0; i < names.length; i++) {
//    console.log(names[i])
//}

//Task 12

//const array =['Nazar', 'Max', 'Andriy', 'Oleg', 2, 4, 6, 8, false, true];
//let arrBoolean = [];
 
//for (let i = 0; i < array.length; i++) {
//    if(typeof array[i] == 'boolean') {
//        arrBoolean.push(array[i]);
//    }
//}
//console.log(arrBoolean);

//Task 13

//const array =['Nazar', 'Max', 'Andriy', 'Oleg', 2, 4, 6, 8, false, true];
//let arrNumber = [];
 
//for (let i = 0; i < array.length; i++) {
//    if(typeof array[i] == 'number') {
//        arrNumber.push(array[i]);
//    }
//}
//console.log(arrNumber);

//Task 14

//const array =['Nazar', 'Max', 'Andriy', 'Oleg', 2, 4, 6, 8, false, true];
//let arrString = [];
 
//for (let i = 0; i < array.length; i++) {
//    if(typeof array[i] == 'string') {
//        arrString.push(array[i]);
//    }
//}
//console.log(arrString);

//Task 15

//let emptyArr = [];
//emptyArr[0] = 'Nazar';
//emptyArr[1] = 'Max';
//emptyArr[2] = 'Andriy'; 
//emptyArr[3] = 'Oleg';
//emptyArr[4] = 2;
//emptyArr[5] = 4;
//emptyArr[6] = 6;
//emptyArr[7] = 8;
//emptyArr[8] = false;
//emptyArr[9] = true;

//for (let i = 0; i < emptyArr.length; i++) {
//   console.log(emptyArr[i])
//}


//Task 16

//for (let i = 1; i <= 10; i++) {
//    console.log(i);
//   document.write(i);
//}

//Task 17

//for (let i = 1; i <= 100; i++) {
//    console.log(i);
//    document.write(i);
//}

//Task 18

//for (let i = 1; i <= 100; i += 2) {
//    console.log(i);
//    document.write(i);
//}

//Task 19

//for (let i = 0; i <= 100; i += 2) {
//    console.log(i);
//    document.write(i);
//}

//Task 20

//for (let i = 1; i <= 100; i += 2) {
//    console.log(i);
//    document.write(i);
//}
 
//Task 21

//let sec = 0;
//let min = 0;

//while (min < 2) {
//    min++;
//    for (let sec = 1; sec <= 60; sec++){
//        console.log(sec, 'sec');
//    }
//    console.log(min, 'min');
//}

//Task 22*

// Не знаю,як перервати цикл щоб було 2год 20хв

//let hours = 0;

//while (hours <= 2 ) {
//    hours++;
//    for (let min = 1; min < 60; min++) {
         
//       for (let sec = 1; sec < 60; sec++){
//               console.log(sec, 'sec');
//        }
//        console.log(min, 'min');  
//    }
//    console.log(hours, 'hours');    
//}


// Task 23

//let arr = ['a', 'b', 'c'];

//for(let i = 1; i <= 3; i++){
//    arr.push(i)
//};
//console.log(arr);

//Task 24

//const arr = [1, 2, 3];
//const reversed = arr.reverse();
//console.log(reversed)


//Task 25

//const arr = [1, 2, 3];
//arr.push(4, 5, 6);
//console.log(arr);

//Task 26

//const arr = [1, 2, 3];
//arr.unshift(4, 5, 6);
//console.log(arr);


//Task 27

//const arr = ['js', 'css', 'jq'];
//let deletedFirst = arr.shift();
//console.log(deletedFirst);

//let deletedLast = arr.pop();
//console.log(deletedLast);

//Task 28

//const array = [1, 2, 3, 4, 5];
//const arrayNew = array.slice(3);
//console.log(arrayNew);

//const arrNew = array.slice(0,2);
//console.log(arrNew);

//Task 29

//const arr = [1, 2, 3, 4, 5];
//const arrSplice = arr.splice(1, 2);
//console.log(arr);

//Task 30

//const arr = [1, 2, 3, 4, 5];
//const arrSpliceAdd = arr.splice(3, 0, 'a', 'b', 'c');
//console.log(arr);

//Task 31

//const arr = [1, 2, 3, 4, 5];
//arr.splice(1, 0, 'a', 'b',)
//arr.splice(6, 0, 'c');
//arr.splice(8, 0, 'e')
//console.log(arr);

//Task 32

//const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 == 0) {
//        console.log(arr[i])
//    }
//}

//Task 33

//const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//let empty = [];

//for (let i = 0; i < arr.length; i++) {
//    empty.push(arr[i]);
//}
//console.log(empty);
