// LESSON: iterators have NEXT() with VALUE: ANY and DONE: BOOLEAN

const makeDragon = require('./make-dragon');

const dragonArmy = {
    /*property name*/
    [Symbol.iterator]: () => {
        /*the function return an object*/
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.75;
                /*there's a good chance (min 25%) of zero being displayed */
                if (!enoughDragonsSpawned) return {
                    value: makeDragon(),
                    done: false
                };
                return {
                    done: true
                };
            }
        }
    }
};

for (const dragon of dragonArmy) {
    dragon; //?
}