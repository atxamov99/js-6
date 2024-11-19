// let fruits = [`olma,`, `banan,`, `gilos`, `shaftoli`];
// console.log(fruits);
// let user = `Boshlanishida Arryning uzunligi: 4`;
// alert(user);
// let main = confirm(`sizning arryingizdan malumotlarni  olib tashlamoqchi`);
// let admin = `Boshlanishida Arryning uzunligi: 3`;
// alert(admin);
// fruits.pop(`shaftoli`);
// console.log(fruits);
let fruits = ["olma,", "banan,", "gilos", "shaftoli"];
console.log(fruits);

let user = `Boshlanishida Arryning uzunligi: ${fruits.length}`;
alert(user);

let main = confirm("Sizning arryingizdan ma'lumotlarni olib tashlamoqchimisiz?");
if (main) {
    fruits.pop(); // Faqat OK bosilganda oxirgi elementni olib tashlaymiz
    alert(`Arry o'zgartirildi! Hozirgi uzunlik: ${fruits.length}`);
} else {
    alert(`Arry o'zgartirilmadi! Hozirgi uzunlik: ${fruits.length}`);
}

console.log(fruits);

