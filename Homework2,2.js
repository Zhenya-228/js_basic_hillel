undefined + 1; // NaN -> number
'true' == true // false -> boolean
false == 'false' // false -> boolean
null == '' // false -> boolean
3 ** (9 / 3); // 27 -> number
!!'false' == !!'true' // true -> boolean
0 || '0' && 1 // 1 -> number
1 < 2 < 3 // true -> boolean
'foo'+ + +'bar' // "fooNaN" -> string
3 ** 2 / 3; // 3 -> number
1 < 2 > 3 // false -> boolean
(+null == false) < 1; // false -> boolean
false && true || true // false -> boolean
false && (true || true); // true -> boolean
(+null == false) < 1 ** 5; // true -> boolean
