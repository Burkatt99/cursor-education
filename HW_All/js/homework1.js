
const chocolate = 15.678;
const perfumes = 123.965;
const book = 90.2345;
const money = 500;
let arr= [chocolate,perfumes,book];

minPrice = Math.min(chocolate, perfumes,book);;
summa = chocolate + perfumes + book;
rest = money - summa;
middle = summa/arr.length;
maxPrice = Math.max(chocolate, perfumes,book);
wholePart = Math.floor(summa);
thous = Math.ceil(summa / 100) * 100;


	if(minPrice % 2 !==0) {
console.log(false)
} else {
	console.log(true)
} 

price = Math.random(100)*400;
discount = Math.floor(Math.random()*100);
sumDiscount = price*discount/100;
sumPay = (price - (price*discount/100)).toFixed(2);
lostProfit = (price/2) - sumDiscount;

const result = `Максимальная цена: ${maxPrice}
Минимальная цена: ${minPrice}
Сумма: ${summa}
Целая часть стоимости всех товаров: ${wholePart}
Сумма товаров округленных до сотен: ${thous}
Здача с 500: ${rest}
Среднее значение цен: ${middle}
Цена: ${price} 
Скидка: ${discount}%
Цена для оплаты: ${sumPay}
Упущенная выгода: ${lostProfit}`
console.log(result);

document.writeln(`Maximum Price: ${maxPrice}`);
document.writeln(`<br>Minimum Price: ${minPrice}`);
document.writeln(`<br>Summa: ${summa}`);
document.writeln(`<br>Whole part all product: ${wholePart}`);
document.writeln(`<br>Summa arounded to thousends: ${thous}`);
document.writeln(`<br>Rest with 500: ${rest}`);
document.writeln(`<br> Middle price: ${middle}`);
document.writeln(`<br>Price: ${price}`);
document.writeln(`<br>Sale: ${discount}%`);
document.writeln(`<br>Summa for pay ${sumPay}`);
document.writeln(`<br>Lost profit: ${lostProfit}`);


