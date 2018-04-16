const randomItem = require( './random-item' );

const makeDragon = () => {
    const dragonSizes = [ 'big', 'medium', 'small' ];
    const dragonSkills = [ 'fire', 'ice', 'lightning' ];
    return randomItem( dragonSizes ) + ' '
        + randomItem( dragonSkills ) + ' dragon';
}

module.exports = makeDragon;