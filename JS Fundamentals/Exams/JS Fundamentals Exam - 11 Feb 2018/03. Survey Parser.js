function surveyParser(input) {
    let surveyRegex = /<svg>((.|\n)*?)<\/svg>/g;
    let format = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
    let valuesRegex = /\s*<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;

    let matches = surveyRegex.exec(input);
    let validMatches = [];
    let survey = '';
    let values = '';

    if (matches) {
        while (matches) {
            let match = matches[1];
            let isValid = format.exec(match);
            if (isValid) {
                validMatches.push(match);
                survey = isValid[3];
                values = isValid[7];
            }

            matches = surveyRegex.exec(input);
        }

        if (validMatches.length > 0) {
            let sum = 0;
            let votes = 0;
            let valuesMatches = valuesRegex.exec(values);
            while (valuesMatches) {
                let value = Number(valuesMatches[1]);
                let count = Number(valuesMatches[2]);
                if (value <= 0 || value > 10) {
                    continue;
                }
                sum += value * count;
                votes += count;
                valuesMatches = valuesRegex.exec(values);
            }

            let average = sum / votes;
            average = parseFloat(average.toFixed(2));
            if (votes === 0) average = 0;
            console.log(`${survey}: ${average}`);

        } else {
            console.log('Invalid format');
        }
    } else {
        console.log('No survey found');
    }
}

surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat>' +
    '<cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg>' +
    '<p>Some more random text</p>')