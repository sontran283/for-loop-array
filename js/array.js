// 111
let abc = [3, 4, 5, 64, 3, 7, 6, 10, 23];
console.log(abc);
console.log("phan tu tai vi tri index 8 la " + abc[8]);
console.log("phan tu cua vi tri index 3 la " + abc[3]);


// 222
let string = ["blue", "red"];
console.log(string);


// 333
let arr = new Array(6, 8, 9,);
console.log(arr);


// 444      for in      vi tri/chi so
console.log("for in---vi tri");
for (let key in abc) {
    // console.log(key);
    console.log(abc[key]);
}
//  tim tong cac phan tu trong mang
console.log("tim tong cac phan tu trong mang");
let aaa = [11, 4, 5, 64, 3, 7, 6, 20, 22];
let sum = 0;
for (let key in aaa) {
    // (for in) no se hien ra vi tri 0,1,2,3...,
    //cho nen can ghi aaa[key].
    sum += aaa[key]
}
console.log(sum);


// 555    for of      tim phan tu
console.log("for of--phan tu");
console.log("tinh tích cua cac phan tu trong mang");
let bbb = [1, 2, 3, 6, 7, 8, 9, 10];
let all = 1;
for (let kkk of bbb) {
    // (for of)hien ra tung phan tu ben trong mang 1,2,3.
    // cho nen can ghi thang luon kkk  (ko phai bbb[kkkF]).
    all *= kkk;
}
console.log(all);


//   for i
console.log("for i");
for (let i = 0; i < bbb.length; i++) {
    if (bbb[i] % 3 == 0) {
        console.log(bbb[i]);
    }
}


//   push
console.log("push---them mot phan tu vao trong mang");
let cacConVat = [];
cacConVat.push("dog");
cacConVat.push("cat");
cacConVat.push("chicken");
console.log(cacConVat);
//  cach thuc hoat dong cua   push
// cacConVat[cacConVat.length] = "birt" = cacConVat.push("birt")
let aaabbb = ["monkey", "money", "dola"]
for (let i = 0; i < aaabbb.length; i++) {
    cacConVat.push(aaabbb[i])
}
console.log(cacConVat);


//  pop
console.log("pop---lay va xoa phan tu cuoi");
let deletee = [2, 3, 4, 5, 6, 7, 666, 665, 777, 888];
console.log(deletee.pop());
console.log(deletee);


//  join
console.log("join---chuyen mang thanh chuoi");
let qwe = [1, 2, 3, 4, 5, 6, 7, 8];
let stringstring = qwe.join(" ");
console.log(stringstring);
// console.log(qwe.toString());


// reverse
console.log("reverse---dao nguoc cac phan tu trong mang");
console.log(qwe.reverse());


// sort
console.log("sort---sap xep mang theo thu tu tang dan");
let arry = new Array("banana", "cherry", "apple");
console.log(arry.sort());


// concat
console.log("concat---noi cac mang voi nhau");
console.log(qwe.concat([9, 10], [11, 12]));


// unshift       để nối phần tử đầu tiên của mảng
// shift         để xóa phần tử vào đầu mảng
let arrdemo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrdemo.unshift(10, 20, 30);
// arrdemo.shift()
arrdemo.splice(4, 1)
console.log(arrdemo);



// thực hành
// thực hành
// thực hành
// bai 1:
// Viết một chương trình JavaScript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau.
// Ví dụ có mảng chuỗi như sau:
// let myWord = ["lion", "dog", "cat", "cow"];
// console.log(myWord.join(" "));



// Bài 2:
// Bài 2:
// Viết một chương trình nhận một số nhập vào và chèn dấu(_) giữa 2 số chẵn.
// Ví dụ nếu bạn nhập vào 245468 thì kết quả của chương trình sẽ là 2-454-6-8.
// b1: cho ng dung nhap vao 1 chuoi so
// b2: chuyen doi chuoi thanh mang, theo dk nao do
// b3: dung join de noi dau "-"

// cach 1:
// chuoi trong js cung la mot mang, chuoi la mot tap hop ky tu
// let string = "24546834356565256"
// let arr = [];
// for (let i = 0; i < string.length; i++) {
//     //charAt ky tu tai vi tri nay
//     // console.log(string.charAt(i) % 2 == 0);
//     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0) {
//         arr.push(string.charAt(i));
//     } else {
//         let temp = string.charAt(i);
//         for (let j = i + 1; j < string.length - 1; j++) {
//             temp += string.charAt(j)
//             if (string.charAt(j) % 2 == 0 && string.charAt(j + 1) % 2 == 0) {
//                 i = j;
//                 break;
//             }
//         }
//         arr.push(temp)
//     }
// }
// console.log(arr.join("-"));

// cach 2:
// nhap vao
// duyet tung ki tu cua chuoi
// neu phat hien 2 ki tu chan, thi pust them dau "-"
// let string = "24546834356565256"
// let arr = [];
// for (let i = 0; i < string.length; i++) {
//     arr.push(string.charAt(i))
//     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0 && i != (string.length - 1)) {
//         arr.push("-")
//     }
// }
// console.log(arr.join(""));



// bai 3:
//  Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi
//  vừa nhập sang thành dạng chữ hoa.
// Ví dụ: nếu bạn nhập vào chuỗi 'Keep Calm And Code On'
// kết quả của chương trình là 'kEEP cALM aND cODE oN'.

// let chuHoa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // khai báo bảng chữ hoa
// let chuThuong = 'abcdefghijklmnopqrstuvwxyz'; // khai báo bảng chữ thường
// // ==> độ dài hai bảng như nhau và vị trí các chữ tương ứng như nhau

// let chuoi = prompt("Nhap vao mot chuoi ma ban muon") // cho người dùng nhập
// let ketQua = [] // biến lưu kết quả

// // vòng lặp để kiểm tra từng chữ trong chuỗi nhập và chuyển đổi nó thành hoa thường
// for (let i = 0; i < chuoi.length; i++) {
//     // nếu là dấu khoảng trắng thì thêm luôn vào kết quả mà ko cần kiểm tra
//     if (chuoi[i] == " ") {
//         ketQua.push(" ")
//         continue
//     }

//     // nếu là chữ thì đi kiểm tra với từng chữ trong bảng chữ cái
//     for (let j = 0; j < chuHoa.length; j++) {
//         // nếu là chữ Hoa thì đổi thành chữ Thường
//         // nếu là chữ Thường thì đổi thành chữ Hoa
//         if (chuoi[i] == chuHoa[j]) {
//             ketQua.push(chuThuong[j])
//         } else if (chuoi[i] == chuThuong[j]) {
//             ketQua.push(chuHoa[j])
//         }
//     }
// }
// console.log(ketQua.join(""));


// let chuhoa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let chuthuong = "abcdefghijklmnopqrstuvwxyz";
// let chuoi = prompt("nhap chuoi")
// let ketqua = []
// for (i = 0; i < chuoi.length; i++) {
//     if (chuoi[i] == " ") {
//         ketqua.push(" ")
//         continue;
//     }
//     for (let j = 0; j < chuhoa.length; j++) {
//         if (chuoi[i] == chuhoa[j]) {
//             ketqua.push(chuthuong[j])
//         } else if (chuoi[i] == chuthuong[j]) {
//             ketqua.push(chuhoa[j])
//         }
//     }
// }
// console.log(ketqua.join(""));



// BAI 4:
// Ứng dụng Todo list
// tạo ghi chú mới (C)
// xem tất cả ghi chú (R)
// sửa một ghi chú nào đấy(U)
// xóa một ghi chú nào đấy(D)
// người dùng sẽ được liên tục C/R/U/D cho đến khi nhập 0 thì thoát chương trình

// const todoList = ["rua rau", "giat do"] // Khai báo mảng ghi chú có sẵn

// let hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") // nhập hành động muốn làm lần đầu
// // vòng lặp kiểm tra xem muốn làm hành động nào,
// //sau khi làm xong hành động đó thì cho nhập để thực hiện hành động khác
// while (true) {


//     if (hanhdong == "C") {  // nếu là C thì thêm ghi chú
//         let congViec = prompt("Nhap cong viec ban muon lam") // cho người dùng nhập ghi chú của họ
//         todoList.push(congViec) // thêm ghi chú vào mảng
//         console.log(todoList); // in ghi chú cho người dùng xem đã thêm được chưa


//     } else if (hanhdong == "R") { // nếu là R thì in ra danh sách ghi chú
//         console.log(todoList);


//     } else if (hanhdong == "U") { // nếu là U thì sẽ cho sửa một ghi chú nào đó
//         let vitri // biến lưu vị trí mà người dùng muốn sửa
//         // vòng lặp để cho người dùng nhập vị trí cho đúng, sai là bắt nhập lại
//         do {
//             vitri = Number(prompt(`Nhap vi tri ban muon sua ( 0 - ${todoList.length - 1})`))
//         } while (vitri < 0 || vitri >= todoList.length)
//         // sau khi có vị trí thì cho người dùng nhập công việc mà họ muốn đổi
//         let suaCongViec = prompt("Nhap cong viec ban muon sua thanh")
//         todoList[vitri] = suaCongViec // sửa lại công việc trong mảng
//         console.log(todoList); // in ra danh sách công việc


//     } else if (hanhdong == "D") { // nếu là D thì sẽ xóa một ghi chú nào đấy
//         let vitri   // vị trí muốn xóa
//         // vòng lặp để bắt nhập đúng vị trị cho phép
//         do {
//             vitri = Number(prompt(`Nhap vi tri ban muon xoa ( 0 - ${todoList.length - 1})`))
//         } while (vitri < 0 || vitri >= todoList.length)
//         todoList.splice(vitri, 1) // xóa công việc tại vị trí đã chọn
//         console.log(todoList); // in lại danh sách ghi chú

//     } else if (hanhdong == 0) { // thoát chương trình
//         break;

//     } else { } // khi người dùng nhập khác C/R/U/D/0 thì bắt nhập lại
//     hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") // cho người dùng nhập lại hành động để thực hiện cho lần sau
// }



// Bài 5:
// Ứng dụng shopping cart
// mảng các sản phẩm có ở cửa hàng

// const bakery = ["socola", "chuoi", "cam", "tao", "xoai"];
// // mảng các sản phẩm đã mua
// const cart = []

// // in ra các sản phẩm có ở cửa hàng
// console.log(bakery);

// let traLoi = "" // lưu câu trả lời để biết xem có mua nữa hay không
// while (traLoi != "no") {
//     // nhập sản phẩm muốn mua
//     let sanPham = prompt("Nhap vao san pham ban muon")

//     // dùng làm includes để xem sản phẩm đó có trong mảng bakery hay không (hàm này mọi người tự tìm hiểu)
//     // nếu có thì tiến hành thêm hoặc cập nhật
//     if (bakery.includes(sanPham)) {
//         let check = false // biến lưu kết quả xem có trong giở hay chưa
//         let vitri // biến lưu vị trí của sản phẩm trong giỏ nếu sản phẩm đã có
//         // vòng lặp kiểm tra xem có trong giỏ hay chưa
//         for (let i = 0; i < cart.length; i++) {
//             // nếu có trong giỏ thì lưu lại vị trí trong giỏ và cập nhật true để xác nhận đã có
//             if (sanPham == cart[i][0]) {
//                 check = true
//                 vitri = i
//             }
//         }

//         // nếu chưa có trong giỏ thì thêm vào giở với số lượng ban đầu là 1
//         if (check == false) {
//             cart.push([sanPham, 1])
//         } else { // nếu có rồi thì tăng số lượng lên 1
//             cart[vitri][1] += 1
//         }

//         console.log(cart); // sau khi thêm hoặc cập nhật lại giỏ thì in ra giỏ để xem

//         // vòng lặp nhập câu trả lời
//         do {
//             traLoi = prompt("Ban co muon mua nua khong")
//         } while (traLoi != "yes" && traLoi != "no")
//         // nếu yes thì mua tiếp
//         // nếu no thì thoát chương trình
//         if (traLoi == "yes") {
//             continue
//         } else {
//             break;
//         }
//     } else { // nếu ko có sản phẩm bạn muốn trong cửa hàng thì in ra là không có
//         console.log("Cua hang ko co san pham nay");
//     }
// }



//////////////////////////////////////////// 1
//////////////////////////////////////////// 1
//////////////////////////////////////////// 1

// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
// cách 1:
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt('Nhập phần tử thứ ' + (i + 1));
// }
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         count++;
//     }
// }
// console.log(`so nguyen to lon hon or bang 10 la ${count} nguyen to`);

// cách 2:
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let value = parseInt(prompt(`Nhập vào số nguyên thứ ${i + 1} :`));
//     arr.push(value);
// }
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         count++;
//     }
// }
// console.log(`Co ${count} so nguyen`);




// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
// let arr = [11, 22, 33, 44, 55, 66, 88, 77, 99, 100];
// let max = Math.max(11, 22, 33, 44, 55, 66, 88, 77, 99, 100);
// let index = arr.indexOf(max);
// console.log("Phần tử trong mang có giá trị lớn nhất là:" + index);




// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let x = [2, 5, 8, 4, 9, 15];
// let max = x[0];
// let sum = 0;
// for (let i = 1; i < x.length; i++) {
//     if (x[i] > max) {
//         max = x[i]
//     }
//     sum = sum + x[i]
// } console.log(max + "la so lon nhat");
// console.log("TBC", sum / x.length);




// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// cách 1:
// let arr = []; // tao mang de luu tru cac gia tri ng dung nhap vao la so nguyen
// let number = +prompt("nhap vao so luong phan tu ban muon them"); // quy dinh so phan tu, qd do dai cua mang
// //gia su number =5
// for (let i = 0; i < number; i++) {
//     let n = +prompt("nhap gia tri cho phan tu thu " + i); //lan 0 nhap n=4 , lan 1 nhap n=5
//     arr.push(n)
// }
// console.log(arr);  // in ra mang sau khi da them , lan i=1 in ra mang gom co 4-5
// console.log(arr.reverse()); //in ra mang dao nguoc.

// cách 2:
// let string = prompt("Nhap 1 day so cach nhau boi dau ',' ")
// let arr = string.split(",")   //split--chuyen chuoi thanh mang.
// console.log(arr.reverse());




// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
// let number = +prompt('Nhập sô lượng bạn muốn kiểm  tra');
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let element = +prompt('Nhập phàn tử bạn muốn kiểm tra')
//     arr.push(element);
// }
// let count = 0;
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < 0) {
//         count++
//     }
// }
// console.log(count);



// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không ?
// Nếu có thuộc mảng số nguyên thì
// in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
// let arr = prompt("Nhập 10 số nguyên bất kỳ cách nhau bởi dấu ','");
// arr = arr.split(",");
// for (i = 0; i < arr.length; i++) {
//     arr[i] = +arr[i];
// }
// console.log(arr);
// let n = +prompt("Nhập vào số nguyên bạn muốn tìm");
// let flag = false;
// for (i = 0; i < arr.length; i++) {
//     if (n == arr[i]) {
//         console.log("Number X is in the array");
//         flag = true;
//     }
// }
// if (flag == false) {
//     console.log("Number X is not in the array");
// }




// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không?
//  Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
// Gợi ý: Việc xoá ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó,
//  và gán 0 cho phần tử cuối cùng của mảng.

// cach 1:
// const a = 10;
// let arr = [];
// let arrDelete = [];
// for (let i = 0; i < a; i++) {
//     let n = +prompt(`Nhap phan tu thu ${i + 1} cua mang 10 phan tu`);
//     arr.push(n);
// }
// let num = +prompt("Nhap 1 so nguyen de kiem tra");
// let check = false;// giả sử không tồn tại
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         // có tồn tại
//         check = true;
//     } else {
//         arrDelete.push(arr[i]);
//     }
// }
// if (check) {
//     // thực hiện xóa
//     arr = arrDelete;
// } else {
//     // thông báo không tồn tại
//     alert(`Giá trị ${num} không tồn tại trong mảng`)
// }
// console.log(arr);  // hiên thị mảng

// cach 2:
// console.log(arr);
// let num = +prompt("Nhap 1 so nguyen de kiem tra");
// let index = arr.indexOf(num);
// let arr1 = [];
// if (index != -1) {
//   // console.log("nam trong mang");
//   for (j = 0; j < arr.length; j++) {
//     if (j != index) {
//       arr1.push(arr[j]);
//     }
//   }
//   arr = arr1;
// } else {
//   console.log("khong nam trong mang");
// }
// console.log(arr);





// Bài 8: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// cách 1:
// let arr = [];
// for (i = 0; i < 10; i++) {
//     let string = +prompt("hay nhap so");
//     arr.push(string);
// }
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let a = arr[i]
//             arr[i] = arr[j]
//             arr[j] = a
//         }
//     }
// }
// console.log(arr);

// cách 2:
// let arr = [];
// for (i = 0; i < 5; i++) {
//     let chuoi = +prompt(`Hãy nhập số nguyên theo thứ tự ${i + 1} đến 5`);
//     arr.push(chuoi);
// }
// for (i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let a = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = a
//         }
//     }
// }
// console.log(arr);





// Bài 9: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử,
// gọi là mảng a và b.Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.
// let a = [];
// let b = [];
// for (let i = 0; i < 10; i++) {
//     let number = Number(prompt(`nhap so thu ${i + 1} cua mang a`));
//     a.push(number);
// }
// for (let i = 0; i < 10; i++) {
//     let number = Number(prompt(`nhap so thu ${i + 1} cua mang b`));
//     b.push(number);
// }
// let c = a.concat(b);
// console.log(c);


////////////////////////////////////////// 2
////////////////////////////////////////// 2
////////////////////////////////////////// 2
// Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.
// let arr = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// //vong lap dem hang.
// for (i = 0; i < arr.length; i++) {
//     console.log(`row ${i}`);   // or ${i + 1}
//     //vong lap dem cac cot trong hang.
//     for (j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }



// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự['c', 's', 'c', '2', '6', '1']sau khi thực hiện đảo ngược sẽ là "162csc".
// let n = ['c', 's', 'c', '2', '6', '1'];
// cách 1:
// console.log(n.reverse().join(""));

// // cách 2:
// let ketqua = ""
// for (let i = n.length - 1; i >= 0; i--) {  // trong mang danh goi theo vi tri tu 0-9, nen phai tru di 1.
//     ketqua += n[i]
// }
// console.log(ketqua);



// Bài 3: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.
// cach 1:
// let kytu = ["n", "3", "i", "8", "9"];
// for (i = 0; i < kytu.length; i++) {
//     if (parseInt(kytu[i]) === 0) {
//         console.log(kytu[i]);
//     } else if (!parseInt(kytu[i])) {
//         continue;
//     } else {
//         console.log(kytu[i]);
//     }
// }

// cach 2:
// let kytu = ["n", "3", "i", "8", "9"];
// for (let i = 0; i < kytu.length; i++) {
//     if (kytu[i] < 0 || kytu[i] >= 0) {
//         console.log(kytu[i]);
//     }
// }



// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
// let chuoi = prompt("hay nhap mot chuoi");
// let count = 0   // dem so luong từ
// chuoi = chuoi.split(" ")
// for (let i = 0; i < chuoi.length; i++) {
//     if (chuoi[i] != "") {
//         count++
//     }
// }
// console.log(count);



// Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// cach 1:
// let chuoi1 = prompt("hay nhap chuoi 1")
// let chuoi2 = prompt("hay nhap chuoi 1")
// if (chuoi1 === chuoi2) {
//     console.log("hai chuoi giong nhau");
// } else {
//     console.log("hai chuoi khac nhau");
// }

// cach 2:
// let chuoi1 = prompt("hay nhap chuoi 1")
// let chuoi2 = prompt("hay nhap chuoi 1")
// if (chuoi1.length !== chuoi2.length) {   // neu do dai khac nhau, thi chac chan hai chuoi khong giong nhau
//     console.log("hai chuoi khong giong nhau");
// } else {
//     let check = true  // mac dinh chung dang giong nhau, di kiem tra tung ki tu cua chung
//     for (let i = 0; i < chuoi1.length; i++) {
//         if (chuoi1[i] !== chuoi2[i]) {
//             check = false
//             break;
//         }
//     }
//     let mess = check ? "giong nhau" : "khong giong nhau"  // toan tu 3 ngoi.
//     console.log(mess);
// }



// Bài 6: Viết chương trình nhập vào một mảng ký tự,
// tìm tất cả các ký tự trong mảng là(-) và thay thế các ký tự này bởi ký tự(_)
// let arr = ["a", "b", "c", "-", "c", "-", "d"];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "-") {
//         arr[i] = "_"
//     }
// }
// console.log(arr.join(""));