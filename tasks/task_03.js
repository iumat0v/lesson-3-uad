/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    let d = ["a", "e", "i", "o", "u", "y"]
    let c = 0
    let b = str.split("")
    for (i = 0; i < b.length; i++) {
        for (j = 0; j < 6; j++) {
            if (b[i] == d[j]) c++;
        }
    }
    return c
}












































module.exports = getVowelsCount