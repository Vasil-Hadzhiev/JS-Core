function aggregate(arr) {

    console.log(`Sum = ${reducer(arr, (a, b) => Number(a) + Number(b))}`);
    console.log(`Min = ${reducer(arr, (a, b) => a > b ? b : a)}`);
    console.log(`Max = ${reducer(arr, (a, b) => a > b ? a : b)}`);
    console.log(`Product = ${reducer(arr, (a, b) => Number(a) * Number(b))}`);
    console.log(`Join = ${reducer(arr, (a, b) => '' + a + b)}`);


    function reducer(arr, func) {
        let result = arr[0];
        for (let element of arr.slice(1)) {
            result = func(result, element);

        }
        return result;
    }
}