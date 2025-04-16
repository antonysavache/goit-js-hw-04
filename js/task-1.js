function isEnoughCapacity(products, containerSize) {
  // Вычисляем общее количество товаров
  let totalItems = 0;
  
  // Перебираем все товары в объекте
  for (const product in products) {
    // Добавляем количество каждого товара к общей сумме
    totalItems += products[product];
  }
  
  // Проверяем, поместятся ли все товары в контейнер
  return totalItems <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false