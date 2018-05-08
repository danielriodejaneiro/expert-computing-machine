function solution(a) {
    console.log('***************************');
    a = a.sort((a, b) => a - b);
    console.log('sorted => ', a);
    let result = -1;
    let done = false;
    a.forEach((current, i, a) => {
            if (a[i + 1] <= current + 1 && current > 0) {
                console.log(i, 'current:', current, ' next:', a[i + 1], ' => NOT VIABLE');
            } else if (a[i + 1] > current + 1 && current > 0) {
                console.log(i, 'current', current, ' next: ', a[i + 1], ' => VIABLE <===');
                !done ? result = current + 1 : null;
                done = true;
            } else {
                console.log(i, '- Value is not positive.');
            }
        }
    );
    a.length === 1 ? result = a[0] + 1 : null;
    return result < 1 ? 1 : result;
}

a1 = [1, 3, 6, 4, 1, 2];
a2 = [1];
a3 = [1345, 3453, 126, 6754, 71, 2];
a4 = [];
a5 = [132311345, -3453, -126, 6754, 71, , 2, 0];

console.log('RESULT:', solution(a1));
console.log('RESULT:', solution(a2));
console.log('RESULT:', solution(a3));
console.log('RESULT:', solution(a4));
console.log('RESULT:', solution(a5));
