function solve(arr) {
    let processor = (function () {
        let text = '';

        return function stringProcessor(cmdString) {
            let tokens = cmdString.split(' ');
            let cmd = tokens[0];
            switch (cmd) {
                case 'append':
                    text += tokens[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(tokens[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0, text.length - Number(tokens[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;
                default:
                    break;
            }
        }
    })();

    for (let command of arr) {
        processor(command);
    }
}