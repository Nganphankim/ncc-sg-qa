//Bài 1: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n
function tinhTong(n) {
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  return tong;
}

// Số phần tử của dãy
let n = 10;

// Gọi hàm và in kết quả
console.log("Tổng của dãy là:", tinhTong(n));

//Bài 2: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
function tinhTong1(n1) {
  let tong = 0;
  for (let i = 1; i <= n1; i++) {
    tong += 1 / i;
  }
  return tong;
}

// Số phần tử của dãy
let n1 = 10;

// Gọi hàm và in kết quả
console.log("Tổng của dãy là:", tinhTong1(n1));

//Bài 3: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 + ... + n^2
function tinhTong2(n2) {
  let tong = 0;
  for (let i = 1; i <= n2; i++) {
    tong += i * i;
  }
  return tong;
}

// Số phần tử của dãy
let n2 = 10;

// Gọi hàm và in kết quả
console.log("Tổng của dãy là:", tinhTong2(n2));

// Bài 4: Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3
function tinhTong3(n3) {
  let tong = 0;
  for (let i = 1; i <= n3; i++) {
    tong += i * i * i;
  }
  return tong;
}

// Số phần tử của dãy
let n3 = 10;

// Gọi hàm và in kết quả
console.log("Tổng của dãy là:", tinhTong3(n3));

Bài 5: Dùng vòng lặp while, in ra tất cả số nguyên dương lẻ < 100
let a = 1;
while (a < 100) {
  console.log(a);
  a += 2;
}

//Bài 6: Dùng vòng lặp while, in ra tất cả số nguyên dương chẵn < 100;
let b = 0;
while (b < 100) {
  console.log(b);
  b += 2;
}

BÀi 7: Dùng vòng lặp while, in ra tất cả số nguyên âm lẻ > -100
let c = -1;
while (c > -100) {
  console.log(c);
  c -= 2;
}

//Bài 8: Dùng vòng lặp while, in ra tất cả số nguyên âm chẵn > -100
let d = -2;
while (d > -100) {
  console.log(d);
  d -= 2;
}

// Bài 9: Viết chương trình in ra hình chữ nhật có cạnh a, b
function inHinhChuNhat(a, b) {
  // Vòng lặp for để in ra từng hàng
  for (let i = 0; i < a; i++) {
    let row = "";
    // Vòng lặp for để in ra từng ký tự trong mỗi hàng
    for (let j = 0; j < b; j++) {
      row += "* "; // In ra ký tự '* ' để tạo ra hình chữ nhật
    }
    console.log(row); // In ra mỗi hàng
  }
}

// Kích thước hình chữ nhật (chiều dài a và chiều rộng b)
let a = 3;
let b = 5;

// Gọi hàm inHinhChuNhat để in hình chữ nhật
inHinhChuNhat(a, b);

// Bài 10: Viết chương trình in ra tam giác cân có chiều cao = h
function inTamGiacCan(h) {
  // Vòng lặp for để in từng hàng của tam giác
  for (let i = 0; i < h; i++) {
    let row = "";
    //Tính số lượng khoảng trắng cần in ở mỗi hàng để tạo ra tam giác cân
    let spaces = h - i - 1;
    // In khoảng trắng ở đầu hàng
    for (let j = 0; j < spaces; j++) {
      row += " ";
    }
    // In các dấu '*' để tạo ra tam giác
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }
    console.log(row); // In ra mỗi hàng
  }
}
// Chiều cao của tam giác
let h = 3;

// Gọi hàm inTamGiacCan để in tam giác
inTamGiacCan(h);

// Bài 11: Đếm số lượng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
var arr = [10, 11, 12, -10, -11, -12];
var dem = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    dem++;
  }
}
console.log(dem);

Bài 12: Đếm số lượng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]var arr = [10, 11, 12, -10, -11, -12];
var arr = [10, 11, 12, -10, -11, -12];
var dem = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    dem++;
  }
}
console.log(dem);

//Bài 13: Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15];
var dem = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    dem++;
  }
}
console.log(dem);

//Bài 14: Đếm số lượng các số lẻ trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15];
var dem = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    dem++;
  }
}
console.log(dem);

Bài 15: Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

//Bài 16: Tìm số bé nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);

Bài 17: Tính tổng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
arr = [10, 11, 12, -10, -11, -12];
let tong = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    tong += arr[i];
  }
}
return console.log(tong);

//Bài 18: Tính tổng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
arr = [10, 11, 12, -10, -11, -12];
let tong = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    tong += arr[i];
  }
}
return console.log(tong);

// Bài 19: Tìm số chẵn đầu tiên trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
function timSoChanDauTien(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return -1;
}

let arr = [10, 11, 12, 13, 14, 15];
let arr2 = [1, 3, 5, 7, 9];

let soChanDauTienArr = timSoChanDauTien(arr);
let soChanDauTienArr2 = timSoChanDauTien(arr2);

console.log("Số chẵn đầu tiên trong mảng arr1 là:", soChanDauTienArr);
console.log("Số chẵn đầu tiên trong mảng arr2 là:", soChanDauTienArr2);

//Bài 20: Tìm số chẵn cuối cùng trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
function timSoChanCuoiCung(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      return arr[i]; // Trả về số chẵn cuối cùng nếu tìm thấy
    }
  }
  return -1; // Trả về -1 nếu không tìm thấy số chẵn
}

let arr1 = [10, 11, 12, 13, 14, 15];
let arr2 = [1, 3, 5, 7, 9];

let soChanCuoiCungArr1 = timSoChanCuoiCung(arr1);
let soChanCuoiCungArr2 = timSoChanCuoiCung(arr2);

console.log("Số chẵn cuối cùng trong mảng arr1 là:", soChanCuoiCungArr1);
console.log("Số chẵn cuối cùng trong mảng arr2 là:", soChanCuoiCungArr2);
