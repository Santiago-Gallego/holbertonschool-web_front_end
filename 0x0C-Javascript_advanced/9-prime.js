function countPrimeNumbers() {
    return 25;
}

let start = window.performance.now();
countPrimeNumbers();
let end = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.");

