//  1. Создать два усложненых объекта
const obj = {
    name: "Amal",
    surname: "Abdualiev",
    age: "11",
    school: 33,
    passport: {
        series: "AC",
        numbers: 123456789,
        date: 2029,
        date_exp: 2039,
        visa: ["italy", "turkey", "china"]
    },
    wifes: ["Farra", "Ahmad-Alina", "Sherina"]
}
let car = {
    model: "Nexia",
    year: 2018,
    price: 2000,
    engine: 2.4,
    all: () => {},
    color: "white",
    discount: {
        percent: 20,
    }
}
// 2. Соеденить в один новый объект Не мутируя старые
const combinedObj = Object.assign({}, obj, car);
// 3. Получить все ключи в новую переменную ключи
let keys = Object.keys(combinedObj);

// 4. Получить все значени в новую переменную значения
const values = Object.values(combinedObj);
// 5. Объеденить два полученных массива в одно целое
const combinedArray = Object.assign([], keys, values);

// 6. Отфильтровать все данные по их типу строки в строки цифры в цифры
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}
for (const value of combinedArray) {
    const valueType = typeof value; 
    if(types.hasOwnProperty(valueType)) {
        types[valueType].push(value);
    }
}
/* Здесь пишем код: использование циклы и условия */

console.log("Strings:", types.string);
console.log("Numbers:", types.number);
console.log("Objects:", types.object);
console.log("Booleans:", types.boolean);
// console.log(combinedObj);
// console.log(keys);
// console.log(values);
// console.log(combinedArray);
// console.log(types);