function getArgumentsInfo() {
    let summary = new Map();

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);

        if(!summary.has(type)){
            summary.set(type, 0);
        }

        summary.set(type, summary.get(type) + 1);
    }

    let sorted = [...summary].sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log((`${kvp[0]} = ${kvp[1]}`));
    }
}

getArgumentsInfo('cat', 42, function () { console.log('Hello world!'); });