// function sum(a, b)
sum = 0;
for (var i = 1; i <= 10; i++)
    sum += i;
console.log("Sum from 1 to 10 is " + sum);
sum = 0;
for (var i = 20; i <= 37; i++)
    sum += i;
console.log("Sum from 20 to 37 is " + sum);
sum = 0;
for (var i = 35; i <= 49; i++)
    sum += i;
console.log("Sum from 35 to 49 is " + sum);

// áp dụng funtion để thu gọn hàm bên trên.
function sum(star, end) {
    let total = 0;
    for (i = star; i <= end; i++) {
        total += i;
    }
}
function main() {
    console.log("sum from 1 to 10 is " + sum(1, 10));
    console.log("sum from 20 to 37 is " + sum(20, 37));
    console.log("sum from 35 to 49 is " + sum(35, 49));
}
