/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    let s = 0
    for (i = 0; i < array.length; i++) {
        s = s + array[i]
    }
    s = s / array.length

    return Number(s.toFixed(1))
}








































module.exports = abs