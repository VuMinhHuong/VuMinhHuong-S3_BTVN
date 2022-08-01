//1-Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, 
//hiển thị hộp thoại thông báo là đã hoàn thành

// for (let i=0; i<=100;i++) {
//     if (i===99){
//         console.log(i,'Bạn đã hoàn thành');
//     }
// }

//====================================================
//2-Hiển thị ra 20 số trong dãy fibonacci đầu tiên
// let n1=0;
// let n2=1;
// let nn;
// let n = 20;
// for (i=0;i<n;i++){
//     console.log(i,n1);
//     nn=n1+n2;
//     n1=n2;
//     n2=nn;
// }
// console.log(F);

//====================================================
//3-Tìm số đầu tiên trong dãy fibonacci chia hết cho 5
// let n1=1;
// let n2=2;
// let nn;
// for (let i=0;;i++){
//     if (n1%5===0){
//     console.log(i,n1);
//     break;    
//     } else if (n1%5!==0){
//         nn=n1+n2;
//         n1=n2;
//         n2=nn;
//     }
// }

//====================================================
//4-Tính tổng của 20 số đầu tiên trong dãy fibonacci
// let n1=0;
// let n2=1;
// let nn;
// let T=0;
// for (let i=1;i<=20;i++){
//     T+=n1;
//     nn=n1+n2;
//     n1=n2;
//     n2=nn;
// }
// console.log(T);

//====================================================
// 5-Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên
// let T=0;
// for (i=1;i<=2;i++){
//     T+=7*i;
// }
// console.log(T);

//====================================================
//6-Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết
//cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết
//cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// let temp;
// for(let i=1;i<=20;i++){
//     if (i%3===0 && i%5===0){
//         console.log('FizzBuzz');
//     } else if (i%3===0){
//         console.log('Fizz');
//     } else if (i%5===0){
//         console.log('Buzz');
//     } else {
//     console.log(i);
//     }
// }

//====================================================
// 7-Tính giai thừa của một số nguyên dương

// let gt=1;
// let n = Number(prompt('Nhập số n'));
// if(Number.isInteger(n)===true){
//     for (let i=1; i<=n;i++){
//         gt*=i;
//     }
// } else if (Number.isInteger(n)!==true){
//     console.log('Nhập n không đúng');
//     gt='';
// }
// console.log(gt);