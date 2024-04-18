/*
* Написать функцию, которая форматирует продолжительность, заданную в секундах, удобным для человека способом.

Функция должна принимать неотрицательное целое число.
*  Если оно равно нулю, оно просто возвращает «now».
*  В противном случае продолжительность выражается как комбинация years, days, hours, minutes и seconds.
*
Гораздо проще понять на примере:
* Для seconds = 62, ваша функция должна вернуть результат.
    "1 minute and 2 seconds"
* Для seconds = 3662 ваша функция должна вернуть результат.
    "1 hour, 1 minute and 2 seconds"
Для целей год состоит из 365 дней, а день — из 24 часов.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year и т.д.
*  Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом.
*  Единица времени используется во множественном числе, если целое число больше 1.
*

* Компоненты разделяются запятой и пробелом («,»).
*  За исключением последнего компонента, который разделяется символами «and», как если бы он был написан на английском языке.
Более значимые единицы времени наступят раньше, чем наименее значимые.
*  Следовательно, 1 second and 1 year неверно, но 1 year and 1 second верно.
*
Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 seconds и 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
Компонент вообще не появится, если его значение равно нулю.
*  Следовательно, 1 minute and 0 seconds недопустимы, но они должны составлять всего 1 minute.
Единицу времени необходимо использовать «насколько это возможно».
*  Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 second.
*  Формально длительность, указанная в компоненте, не должна превышать любую допустимую более значимую единицу времени.
*
* * */
function formatDuration (seconds) {
    let t = []
    let h = 0
    let y = 0
    let d = 0
    let m = 0
    let str = ''
    if (seconds == 0) s = 'now';
    if (seconds >= 31536000) {
        y = (seconds - seconds % 31536000) / 31536000
        seconds = seconds % 31536000
    }
    if (seconds >= 86400) {
        d = (seconds - seconds % 86400) / 86400
        seconds = seconds % 86400
    }
    if (seconds >= 3600) {
        h = (seconds - seconds % 3600) / 3600
        seconds = seconds % 3600
    }
    if (seconds >= 60) {
        m = (seconds - seconds % 60) / 60
        seconds = seconds % 60
    };
    if (y != 0) {
        if (y > 1) t.push(`${y} years`);
        else t.push(`${y} year`);
    };
    if (d != 0) {
        if (d > 1) t.push(`${d} days`);
        else t.push(`${d} day`);
    };
    if (h != 0) {
        if (h > 1) t.push(`${h} hours`);
        else t.push(`${h} hour`);
    };
    if (m != 0) {
        if (m > 1) t.push(`${m} minutes`);
        else t.push(`${m} minute`);
    };
    if (seconds != 0) {
        if (seconds > 1) t.push(`${seconds} seconds`);
        else t.push(`${seconds} second`);
    };
    for (i = 0; i < t.length; i++) {
        let del = ', '
        if (i == t.length - 1) del = '';
        else if (i == t.length - 2) del = ' and ';
        str = str + t[i] + del
    }
    return str
}

















































































module.exports = formatDuration