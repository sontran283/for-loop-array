// bai 1: Sử dụng toán tử
// Viết một ứng dụng để tính diện tích của hình chữ nhật dựa vào chiều rộng và chiều cao được nhập vào.
// let chieurong = +prompt("hay nhap chieu rong cua hinh chu nhat");
// let chieucao = +prompt("hay nhap chieu cao cua hinh chu nhat");
// let dientich = chieurong * chieucao;
// console.log('dientich cua hinh chu nhat se la : ' + dientich);



// bai 2:  Mô tả thuật toán tính điểm trung bình
// let vatli = +prompt("hay nhap diem mon vat li");
// let sinhhoc = +prompt("hay nhap diem mon sinh hoc");
// let hoahoc = +prompt("hay nhap diem mon hoa hoc");
// let dtb = (+vatli + sinhhoc + hoahoc) / 3;
// console.log("diem trung binh cua 3 mon se la : " + dtb);



// bai 3:
// Mô tả thuật toán chuyển đổi tiền tệ
// $1 = 23000 VNĐ
// let dola = +prompt("nhap so dola ban muon doi sang vnd");
// let changer = (dola * 23000);
// console.log(`so tien ban nhan duoc la  ${changer}  vnd`);



// bai 4:
// Mô tả thuật toán tìm giá trị lớn nhất trong 3 số
// let a = +prompt("hay nhap so bat ki a");
// let b = +prompt("hay nhap so bat ki b");
// let c = +prompt("hay nhap so bat ki c");
// if (a > b && a > c) {
//     console.log("a la so lon nhat");
// } else if (b > c && b > a) {
//     console.log("b la so lon nhat");
// } else {
//     console.log("c la so lon nhat");
// }



// bai 5:
// Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó
// let n = [2, 3, 4, 5, 6];
// let max = n[0];          //Khai báo một biến max với giá trị khởi tạo bằng phần tử đầu tiên của mảng n.
// for (let i = 1; i < n.length; i++) {
//     if (n[i] > max) {
//         max = n[i];
//     }
// }
// console.log("gia tri lon nhat trong day so la" + max);



// bai 6:
// Luyện tập với toán tử ba ngôi
// let a = +prompt("nhap so a");
// let b = +prompt("nhap so b");
// // if (a + b < 4) {
// //     console.log("Below");
// // } else {
// //     console.log("Over");
// // }

// //  sử dụng toán tử ba ngôi
// let abc = a + b < 4 ? "Below" : "over";
// console.log(abc);



// bai 7:
// Tính chỉ số cân nặng của cơ thể
// bmi = weight / ( height ^ 2 );
// let weight = +prompt("nhap can nang");
// let height = +prompt("nhap chieu cao");
// let bmi = weight / (height * height);
// if (bmi < 25) {
//     console.log("binh thuong");
// } else if (bmi < 29) {
//     console.log("tien beo phi");
// } else if (bmi < 35) {
//     console.log("beo phi cap do 1");
// } else if (bmi < 40) {
//     console.log("beo phi cap do 2");
// } else {
//     console.log("beo phi cap do 3");
// }



// bai 8:
// thực hành với Câu lệnh switch-case
// let month = +prompt("moi nhap vao thang 1/2.../12");
// switch (month) {
//     case 1:
//         alert("thang 1 co 31 ngay");
//         break;
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//         alert("thang 2,3,4,5,6,7,8 co 30 ngay");
//         break;
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         alert("thang 9 31 co ngay");
//         alert("thang 10 co 31 ngay");
//         alert("thang 11 co 31 ngay");
//         alert("thang 12 co 31 ngay");
//         break;
//     default:
//         alert("khong hop le");
// }



// bai 9:
// Máy tính đơn giản
// let a = +prompt("nhap so a");
// let b = +prompt("nhap so b");
// let pheptinh = prompt("moi ban nhap cac phep tinh (+,-,*,/)");
// let all;
// switch (pheptinh) {
//     case "+":
//         all = a + b
//         break;
//     case "-":
//         all = a - b
//         break;
//     case "*":
//         all = a * b
//         break;
//     case "/":
//         if (b == 0) {
//             alert("dieu kien khong ton tai")
//         } else {
//             all = a / b
//             break;
//         }
// }
// console.log(`ket qua cua phep tinh tren se la : a ${pheptinh} b = ${all}`);



// bai 10:
// Tìm Max - Min
// Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c.
// Tiến hành kiểm tra xem số nào là max và số nào là min.
// Sau đó in max và in ra màn hình console theo cú pháp “Max là - …” “Min là - …”.
// let a = +prompt("nhap so a");
// let b = +prompt("nhap so b");
// let c = +prompt("nhap so c");
// tim max:
// if (a > b && a > c) {
//     console.log("max la a");
// } else if (b > c && b > a) {
//     console.log("max la b");
// } else {
//     console.log("max la c");
// }
// tim min:
// if (a < b && a < c) {
//     console.log("min la a");
// } else if (b < c && b < a) {
//     console.log("min la b");
// } else {
//     console.log("min la c");
// }



// bai 11:
//  Viết chương trình cho phép người dùng nhập vào 1 số.
//  Kiểm tra xem số nhập vào là số chẵn hay số lẻ(sử dụng switch case).
// let number = +prompt("nhap so");
// switch (number % 2) {
//     case 0:
//         console.log("a la so chan");
//         break;
//     case 1:
//         console.log("a la so le");
//         break;
//     default:
//         console.log("ko hop le");
// }



// bai 12:
// Giải phương trình bậc 1.
// Cho phương trình ax + b = 0
// Nếu a = 0, b = 0 ta có thể suy ra phương trình(1) có vô số nghiệm
// Nếu a = 0, b ≠ 0 ta có thể suy ra phương trình(1) vô nghiệm
// Nếu a ≠ 0 ta có thể suy ra phương trình(1) có một nghiệm duy nhất là x = -b / a
// let a = +prompt("nhap so a");
// let b = +prompt("nhap so b");
// if (a == 0 && b == 0) {
//     console.log("phuong trinh co vo so nghiem");
// } else if (a == 0 && b !== 0) {
//     console.log("phuong trinh vo nghiem");
// } else {
//     console.log(`phuong trinh co duy nhat mot nghiem x=` + (- b / a));
// }



// bai 13:
// ax2 + bx + c=0
// delta = b^2 - 4ac
// delta < 0          phương trình vô nghiệm
// delta = 0          phương trình có nghiệm kép x1 = x2 = - b /(2 * a)
// delta > 0          phương trình có 2 nghiệm phân biệt, ta dùng công thức nghiệm sau:
// x1 = (-b + Math.sqrt(delta)) / (2 * a);
// x2 = (-b - Math.sqrt(delta)) / (2 * a);
// let a = +prompt("nhap so a");
// let b = +prompt("nhap so b");
// let c = +prompt("nhap so c");
// if (a !== 0) {
//     let delta = (b * b) - (4 * a * c)
//     if (delta < 0) {
//         console.log("phuong trinh vo nghiem");
//     } else if (delta = 0) {
//         let x = -b / (2 * a)
//         console.log("phuong trinh co nghiem kep x1=x2=" + x);
//     } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         console.log("phuong trinh co nghiem x1=" + x1);
//         console.log("phuong trinh co nghiem x2=" + x2);
//     }
// }



// bai 14:
// Viết chương trình tính giá điện.
// let a = +prompt("nhap so");
// let x;
// if (a < 50) {
//     x = a * 1678;
// } else if (a < 100) {
//     x = ((a - 50) * 1734) + (50 * 1678);
// } else if (a < 200) {
//     x = ((a - 100) * 2014) + (50 * 1678) + (50 * 1734);
// } else if (a < 300) {
//     x = ((a - 200) * 2536) + (50 * 1678) + (50 * 1734) + (100 * 2014);
// } else if (a < 400) {
//     x = ((a - 300) * 2834) + (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536);
// } else {
//     x = ((a - 400) * 2927) + (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (100 * 2834);
// }
// console.log(`gia ban le dien sinh hoat la : ${x}`)




// console.log("SS11-vòng lặp loops");
// console.log("SS11-vòng lặp loops");
// console.log("SS11-vòng lặp loops");
// bai 15:
// bảng cửu chương 5
// for (let i = 1; i <= 10; i++) {
//     let num = 5 * i
//     console.log("5x" + i + "=" + num);
// }




// bai 16:
// Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for.Với N sẽ hiển thị từ 0 đến 5.
// let text = "";
// for (let i = 1; i <= 5; i++) {
//     text += "the number is " + i + "\n";
// }
// console.log(text);




// bai 17:
// Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.
// // total = 0 dùng để lưu tổng.
// // Biến total được đặt với giá trị ban đầu là 0 để lưu trữ tổng các số từ 1 đến n.
// // Trong quá trình tính tổng, giá trị của biến total sẽ được cộng dồn với giá trị của các số từ 1 đến n.
//     // Biểu thức total += i được sử dụng để cộng giá trị của biến total với giá trị của biến i,
//     //     và gán kết quả trở lại cho biến total.
//     // Trong quá trình lặp qua các giá trị từ 1 đến n,
//     //         giá trị của biến i sẽ được cộng dồn vào biến total,
//     //             cho đến khi giá trị của biến i đạt được giá trị của n.Khi đó,
//     //                 biến total sẽ chứa tổng của các số từ 1 đến n.
//     // Nếu ta chỉ sử dụng phép gán total = i thay vì total += i,
//     //         giá trị của biến total sẽ chỉ bằng giá trị của biến i,
//     //             không phải tổng các số từ 1 đến n.Do đó,
//     //                 phép tính total += i là rất quan trọng để tính tổng các số từ 1 đến n.
// let a = +prompt("hay nhap so bat ki");
// let total = 0;
// for (let i = 1; i <= a; i++) {
//     total += i;
// }
// console.log(total);



// bai 18:
// Sử dụng vòng lặp lồng nhau, tạo nên một bảng các ô số
{/* <table id="table" border="1" cellspacing="0">
    </table>
    <script>
        let a = "";
        for (i = 1; i <= 10; i++) {
            let b = "";
            for (j = 1; j <= 10; j++) {
                b += `<td>${i * j}</td>`
            }
            a += `<tr>${b}</tr>`
        }
        document.getElementById("table").innerHTML = a;
    </script> */}



// bai 19：
//  Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị - 1.
//  Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó.
// let sum = 0;
// let num = 0;
// while (num !== -1) {
//     num = parseInt(prompt("Nhập một số (nhập -1 để thoát): "));
//     if (num !== -1) {
//         console.log("Số bạn vừa nhập là:"+ num);
//         sum += num;
//     }
// }
// console.log("Tổng các số bạn đã nhập là:"+ sum);



// bai 20:
// Sinh bảng cửu chương.
// Sinh bảng cửu chương.
// Sinh bảng cửu chương.
// {/* <script>
// let n;
//         do {
//             n = +prompt("hay nhap vao mot so tu 1 den 9");
//             console.log(n);
//         } while (n < 1 || n > 9);
//         for (let i = 1; i <= 10; i++) {
//             let total = n * i;
//             document.writeln(`${n} * ${i} = ${total}`);
//         }

// </script> */}



// bai 21:
// Hiển thị các số nguyên tố đầu tiên
// let number = +prompt("hay nhap mot so nguyen bat ki");
// let N = 2;
// let count = 0;
// let check = true;
// while (count < number) {
//     for (let i = 2; i <= (N / 2); i++) {
//         if (N % i == 0) {
//             check = false;
//             break;
//         }
//     }
//     if (check = true) {
//         console.log(N);
//         count++
//     }
//     N++
//     check = false;
// }

//     Bước 1: Biến N được khởi tạo với giá trị ban đầu là 2.
// Đây sẽ là số nguyên tố đầu tiên mà chúng ta bắt đầu kiểm tra.
//     Bước 2: Biến count được khởi tạo với giá trị ban đầu là 0.
// Đây sẽ đếm số lượng số nguyên tố đã được tìm thấy.
//     Bước 3: Biến check được khởi tạo với giá trị ban đầu là true.
// Biến này sẽ được sử dụng để kiểm tra xem số N có phải là số nguyên tố hay không.
//     Bước 4: Một vòng lặp while được sử dụng để tìm "num" số nguyên tố đầu tiên.
// Vòng lặp này sẽ tiếp tục cho đến khi count đạt đến giá trị num.
