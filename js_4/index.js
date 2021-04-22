// const option1 = new RegExp('pattern');
// const option2 = /pattern/;

// ================

// /abc/            Идущие подряд символы abc
// /q[abc]q/          Один из символов a, b или c
// /q[^abc]q/         Ни один из символов, т. е. не а, не b и не c
// /[a-z]/          Диапазон символов, идущих подряд в таблице Unicode
// /\b/             Граница слова
// /\B/             Не граница слова
// /\d/             Цифра
// /\D/             Не цифра
// /\w/             Латинская буква, цифра или _
// /\W/             Не латинская буква, не цифра и не _
// /\s/             Пробельный символ
// /\S/             Непробельный символ
// /a{3}/           Строго 3 символа а подряд
// /a{2,4}/         От 2 до 4 символов а подряд
// /a+/             1 и более символов а подряд
// /a*/             0 и более символов а подряд
// /a?/             0 или 1 символ а
// /./              Один любой символ, кроме переноса строки

// /abc/ig

// /gr(a|e)y/ 

// ================

// const str = '123 abc 456';

// const reg1 = /abc/
// const reg2 = /zxc/

// console.log(reg2.test(str))

// ================

// const str = 'Geek from Geekbrains';
// const regexp = /Geek/g;

// console.log(str.match(regexp));

// ================

// const str = 'This is string';
// const regexp = /\bis/g;

// console.log(str.replace(regexp, '+'));

// =================

// const str = 'Hi, I am Greek geek from Geekbrains';
// const regexp = /(g.+?k)/gi;

// console.log(str.replace(regexp, '[$1]')); 

// ===================

// const str = '000 1221 133331';

// const regexp = /1.+?1/g;

// ===================

// const regUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

// const regEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/

// const emailRegExp = /^\S+@\S+$/i;


