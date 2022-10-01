let toPrint;

for (let i = 0; i <= 100; i++) {
    toPrint = i;
    while (i % 3 == 0) {
        toPrint = "Fizz";
        break;
    }
    while (i % 5 == 0) {
        toPrint = "Buzz";
        break;
    }
    while (i % 15 == 0) {
        toPrint = "FizzBuzz";
        break;
    }
    while (i == 0) {
        toPrint = i;
        break;
    }
    console.log(toPrint);
}