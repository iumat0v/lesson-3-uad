/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
    let a = [];
    let c;
    for (key in results) {
        if (results[key] >= 60) a.push(key);
    }
    for (i = 0; i < a.length - 1; i++) {
        for (j = 0; j < a.length - 1 - i; j++) {
            if (results[a[j]] < results[a[j + 1]]) {
                c = a[j];
                a[j] = a[j + 1];
                a[j + 1] = c;
            }
        }
    }
    return a
}











































































module.exports = myLanguages

