//1
// function returnPromes() {
//     return new Promise((resolve, reject) => {
//         const timer = new Date().getHours()
//         if (timer > 11) {
//            resolve("goodluke" + "goodmorning")
//         }
//         reject("Eror" + "goodEvning")
//     });
// }
// returnPromes()
//     .then((data) => { document.write(data) })
//     .catch((err) => { document.write(err) })

//3
// function printPromes(num1,num2){
// return new Promise((resolve,reject)=>{
//     if(num1%num2==0){
//         resolve("goodluke"+"Yes")
//     }
//     reject("eror"+"No")
// })
// }
// printPromes(1,1)
// .then((data)=> {document.write(data)})
// .catch((err)=> {document.write(err)})
//5
// function checkArray(myArray,num){
// return new Promise((resolve,reject)=>{
//     if(myArray.includes(num)){
//         resolve("goodluck")
//     }
//     reject("no")
// })
// }   
// checkArray([5,2,7,9],5)
// .then((data)=>{document.write(data)})
// .catch((err)=>{document.write(err)})
//6


//fetch
//1 
// async function fechingUrl(){
//     try{
// await fetch('http://moviesmern.herokuapp.com/movies/all')
// .then(data =>console.log(data))
//     }
//     catch(eror){
//         alert(eror)
//     }
// }