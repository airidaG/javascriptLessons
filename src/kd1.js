// 1. Skaičių suma
// Parašykite funkciją, kuri grąžina visų lyginių ir visų nelyginių skaičių sumą intervale nuo 0 iki 100.
// Panaudokite for loop.

const sumEvenOdd = () => {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i <=100; i++) {
        if (i % 2 === 0){
            sumEven += i;
        }else {
            sumOdd += i;
        }
    }
    return {
        sumEven: sumEven,
        sumOdd: sumOdd
    };
}

const result = sumEvenOdd();
console.log(`Sum of even numbers: ${result.sumEven}`);
console.log(`Sum of odd numbers: ${result.sumOdd}`);

