/* In addition to your own symbols, JavaScript has some built-in symbols which represent internal language behaviors which were not exposed to developers in ECMAScript 5 and before. These symbols can be accessed using the following properties:
 *
  *
  * */

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false