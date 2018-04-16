/*MDN NOTES
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
* TYPES THAT DO HAVE ITERATORS ASSOCIATED BY DEFAULT
* Array AND TypedArray
* String
* Map
* Set
* */


const myIterable = {};/*?*/
// const iterable1 = new Object();


myIterable[Symbol.iterator] = function* () {
    yield 1;/*?*/
    yield 2;/*?*/
    yield 3;/*?*/
};/*?*/

[...myIterable] //?
// console.log([...iterable1]);
