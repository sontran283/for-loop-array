console.log("luyện tập vòng lặp 1");
// Bài 1:
// Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i == 99) {
//         alert("da hoan thanh");
//     }
// }



// bai 2:
//  Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
//  Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.Nếu nhiệt độ dưới 20,
//     yêu cầu người dùng tăng nhiệt độ.
// let num = +prompt("hay nhap nhiet do")
// if (num > 100) {
//     console.log("hay giam nhiet do");
// } else {
//     console.log("tang nhiet do");
// }



// bai 3:
//  Hiển thị ra 20 số trong dãy fibonacci đầu tiên. và tính tổng của chúng.
// let a = 0;
// let b = 1;
// let x;
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//     x = a + b;
//     a = b;
//     b = x;
//     console.log(x);
//     sum = sum + x;
// }
// console.log("tổng của 20 số đầu tiên là: " + sum);



// bai 4:
// Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let count = 0;
// let N = 1;
// let sum = 0;
// while (count <= 30) {
//     if (N % 7 == 0) {
//         sum = sum + N;
//         count++
//     }
//     N++
// }
// console.log("tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên la" + sum);



// bai 5:
// Game đoán số Nâng cấp game "Hãy thử đoán xem!"
// game đoán số , từ 1->10
// có 3 lần đoán , mỗi đoán xong néu sai thì sẽ gợi ý
// game dừng khi đoán đúng

// let count = 1;
// let number;
// let random = Math.round(Math.random() * 9) + 1;
// console.log(random);
// while (count <= 3) {
//     number = +prompt("Nhập số muốn đoán  1-10");
//     if (count == 3) {
//         // nếu lượt đoán thứ 3
//         if (number == random) {
//             alert("you win");
//             break;
//         } else {
//             alert("you lose");
//         }
//     } else {
//         // chưa đến lượt thứ 3
//         if (number == random) {
//             alert("you win");
//             break;
//         } else if (number < random) {
//             alert(`Lơn hơn ${number} , bạn còn ${3 - count} lần`);
//         } else {
//             alert(`Bé hơn ${number} , bạn còn ${3 - count} lần`);
//         }
//     }
//     count++;
// }



// bai 6:
// Viết chương trình in bảng cửu chương
// let n;
// do {
//     n = +prompt("hay nhap vao mot so tu 1 den 9");
//     console.log(n);
// } while (n < 1 || n > 9);
// for (let i = 1; i <= 10; i++) {
//     let total = n * i;
//     document.writeln(`${n} * ${i} = ${total} `);
// }