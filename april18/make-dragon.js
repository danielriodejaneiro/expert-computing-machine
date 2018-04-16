const randomItem = require( './random-item' );

const makeDragon = () => {
    const dragonSizes = [ 'tiny', 'big', 'medium', 'small' ];
    const dragonSkills = [ 'time', 'fire', 'ice', 'lightning' ];
    return randomItem( dragonSizes ) + ' '
        + randomItem( dragonSkills ) + ' dragon';
}

module.exports = makeDragon;