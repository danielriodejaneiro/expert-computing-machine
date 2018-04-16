const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
];

for ( const dragon of dragons ) {
    dragon
}

const iterator = dragons[ Symbol.iterator ]();
iterator.next() /*?*/
iterator.next() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?

for ( const char of dragons[ 0 ] ) {
    // char;
    console.log( char );
}