
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
thous = (summa).toFixed(2);


	if(minPrice % 2 !==0) {
console.log(false)
} else {
	console.log(true)
} 

price = Math.random(100)*400;
discount = Math.floor(Math.random()*100);
sumDiscount = price*discount/100;
sumPay = price - (price*discount/100);
lostProfit = (price/2) - sumDiscount;

const result = `Максимальная цена: ${maxPrice}
Минимальная цена: ${minPrice}
Сумма: ${summa}
Целая часть стоимости всех товаров: ${wholePart}
Сумма товаров округленных до сотен: ${thous}
Здача с 500: ${rest}
Среднее значение цен: ${middle}
Цена: ${price}
Скидка: ${discount}
Цена для оплаты: ${sumPay}
Упущенная выгода: ${lostProfit}`
console.log(result);

