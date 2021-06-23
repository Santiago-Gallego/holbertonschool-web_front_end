function countPrimeNumbers() {
    return 25;
}

let start2 = window.performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let end2 = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end2 - start2) + " milliseconds.");

