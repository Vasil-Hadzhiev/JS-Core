function stringOfNumbers(number) {

    let result = "";
    for (let i = 1; i <= Number(number); i++) {
        result += i
    }

    return result;
}