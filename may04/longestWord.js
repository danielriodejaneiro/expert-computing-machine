function longestWord(s) {
    const arrayOfWords = s.toLowerCase().match(/[a-z0-9]+/g);
    /*THIS IS A SORTED ARRAY*/
    // const sorted = arrayOfWords.sort();
    // console.log('String transformed into sorted array', arrayOfWords);

    /*THIS IS A CUSTOM SORTED ARRAY*/
    arrayOfWords.sort((a, b) => {
        return b.length - a.length;
    });
    console.log('String transformed into array sorted BY LENGTH', arrayOfWords);
}

longestWord('Meu nome eh daniel SANTOS');
