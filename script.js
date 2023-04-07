// alert("Hello external");
var subject = 'JavaScript';
number =10 ;

console.log(number)
// Hiển thị ở info của console
console.log(subject);

// Hiển thị ở warning của console
console.warn('Phát hiện lỗi');
// Hiển thị ở error của console
console.error('Lỗi các bạn ơi');

// Khai báo
var age;
// Gán
age = 18;
console.log("giá trị của age", age);
// Kiểm tra kiểu dữ liệu
console.log('Kiểm tra kiểu dữ liệu', typeof age);

let city = 'Danang';
{
    let age = 20;
    age =30;
    console.log('thành phố', city);
    console.log("Kiem tra age 2", age);
}
console.log('check age', age);

// const -> constant
const BIEN_SO_XE = 43;
// BIEN_SO_XE = 50;

let name_class;

let bag = null;
console.log('check tên lớp', name_class);
console.log('check bag', typeof bag);

let isCheck = confirm('Bạn muốn kiểm tra ko ?');
console.log('kết quả check', isCheck);

const r = prompt("Nhập vào đk hình tròn", 5);
console.log('Kiểm tra bán kính', r);