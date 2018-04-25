function solution(input) {
    for (let obj of input) {
        let numbers = obj.split(' ');
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === '32656') {
                if (numbers[i + 1] === '19759') {
                    if (numbers[i + 2] === '32763') {
                        let count = numbers[i + 4];
                        i = i + 6;
                        let counter = 0;
                        let codedNumbers = [];
                        while (counter < count) {
                            codedNumbers.push(numbers[i]);
                            i++;
                            counter++;
                        }

                        i--;

                        let result = '';

                        for (let ascii of codedNumbers) {
                            if (Number(ascii) < 126){
                                result += String.fromCharCode(ascii);
                            }
                        }

                        console.log(result);
                    }
                }
            }
        }
    }
}

solution(['32656 19759 32763 0 2 0 80 101 0 32656 19759 32763 0 2 0 85 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 ']);