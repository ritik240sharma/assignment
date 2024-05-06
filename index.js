// 1.-------------------------------------------

// var s="where the world is without fear "
// var arr=s.split(" ");
// var pattern="world";
// let index=0;
// arr.forEach(x=>{
//    if(x===pattern){
//     console.log(index)
//     return;
//    }
//    index++;
// })

//2-------------------------------
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr; 
//      }

//     const pivot = arr[0]; 
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]); 
//                } else {
//             right.push(arr[i]);
//            }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]; 
// }

// const unsortedArray = [5, 3, 7, 2, 9, 1, 4];
// const sortedArray = quickSort(unsortedArray);
// console.log("Sorted Array:", sortedArray);

// 3.---------------------------------------------



// -------------------------------------------------
// var library = [
//     {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//     },
//     {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
//     },
//     {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false
//    }];

//   library.forEach(x=>{
//     console.log("title : ",x.title ,"author :",x.author ,"status :",x.readingStatus);
//   })

// 9.--------------------------------------
//    var arr=[5,8,2,3,0,8];
//    var sorted=[...arr];
//    sorted.sort();
//    console.log(sorted,"   ",arr)
//    if(arr===sorted)console.log("yes")
//     else console.log("no")

// 10---------------------------------------
// function isNull(value) {
//     return value === null;
// }

// // Example usage:
// console.log(isNull(null)); // true
// console.log(isNull(undefined)); // false
// console.log(isNull(0)); // false
// console.log(isNull("")); // false
// console.log(isNull([])); // false

// 11-----------------------------------------
// function isNumber(value) {
//     return typeof(value )=== 'number' && !isNaN(value);
// }

// console.log(isNumber(44));
// console.log(isNumber());



// ----------------------------------------
// 16.

// function Time(){
//     var date=new Date();
//     console.log(date.getHours(),":",date.getMinutes(),":",date.getSeconds());
// }

// setInterval(Time,1000)


// 17.-----------------------------

// var s="abcd";
// var n=s.length;
// var arr=[];
// for(let i=0;i<n;i++){
//     arr[i]=s[i];
// }

// arr.forEach(x=>{
//     console.log(x)
// })

// function splitStringIntoWords(inputString) {
    
//     var wordsArray = inputString.split(" ");
//     return wordsArray;
// }


// var inputString = "Hello world, this is a sample string.";
// var words = splitStringIntoWords(inputString);
// console.log(words);

// 18-------------------------------

// var s="abcABC";
// var x="";
// for(let i=0;i<s.length;i++)
//     {
//         if(s[i]>='a'&&s[i]<='z')
//             {
//               x+=s[i].toUpperCase()
//             }else{
//                x+=s[i].toLowerCase()
//             }
//     }
// s=x
//     console.log(s)

// 19 ----------------------------------------

// function convert(num)
// {
//     let hour=Math.floor(num/60);
//     var min=num%60;
//     console.log("hour :" ,hour ," ","min: ",min)
// }

// convert(200)
// 20  ---------------------------------------------












// 21---------------------------

// class Node{
//     data;
//     next;
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// function empty(x){
//    if(x==null)return true;
//    else return false;
// }

// var a=new Node(2);
// var b=new Node(3);
// a.next=b;
// console.log(empty(a))


// 22.------------------------------------

// class Rectangle{
//     constructor(height,weidth){
//         this.height=height;
//          this.weidth=weidth;
//     }

//     perimeter(){
//         return  (this.height+this.weidth) *2;
//     }

//     Area(){
//         return this.height*this.weidth;
//     }
// }

// var ob=new Rectangle(2,3);
// console.log(ob.Area(),ob.perimeter())

// 23--------------------------------------------
