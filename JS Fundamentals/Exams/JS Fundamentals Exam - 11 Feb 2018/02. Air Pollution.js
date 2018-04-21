function airPollution(map, forces) {
    let matrix = [];

    for (let line of map) {
        let row = line.split(' ').map(n => Number(n));
        matrix.push(row);
    }

    for (let obj of forces) {
        let [force, value] = obj.split(' ');

        if (force === 'breeze') {
            for (let i = 0; i < matrix.length; i++) {
                if (i === Number(value)) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] - 15 < 0){
                            matrix[i][j] = 0;
                        } else {
                            matrix[i][j] -= 15;
                        }
                    }
                }
            }
        } else if (force === 'gale') {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (j === Number(value)) {
                        if (matrix[i][j] - 20 < 0){
                            matrix[i][j] = 0;
                        } else {
                            matrix[i][j] -= 20;
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] += Number(value);
                }
            }
        }
    }

    let pollutedAreas = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50){
                pollutedAreas.push(i);
                pollutedAreas.push(j);
            }
        }
    }

    let result = '';

    if (pollutedAreas.length > 0){
        result += 'Polluted areas: ';
        for (let i = 0; i < pollutedAreas.length; i+=2) {
            let x = pollutedAreas[i];
            let y = pollutedAreas[i + 1];

            result += `[${x}-${y}], `;
        }

        result = result.substring(0, result.length - 2);
    } else {
        result = 'No polluted areas';
    }

    console.log(result);
}

airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);