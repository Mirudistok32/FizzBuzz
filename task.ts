for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i != 0) {
        console.log("FizzBuz")
        continue
    } else if (i % 3 === 0  && i != 0) {
        console.log("Fizz")
        continue
    } else if (i % 5 === 0 && i != 0) {
        console.log("Buzz")
        continue
    } else {
        console.log(i)
    }
}
