function attachEvents() {
    const URL = 'https://judgetests.firebaseio.com/';

    let btn = $('#submit').on('click', getWeather);
    let input = $('#location');
    let forecastDiv = $('#forecast');
    let currentDiv = $('#current');
    let upcomingDiv = $('#upcoming');

    let weatherSymbols = {
        'Sunny': "\u2600", // ☀
        'Partly sunny': "\u26C5", // ⛅
        'Overcast': "\u2601", // ☁
        'Rain': "\u2602", // ☂
        'Degrees': "\u00B0", // °
    };

    let degreeSymbol = weatherSymbols['Degrees'];

    function getWeather() {
        forecastDiv.css('display', 'block');

        $.ajax({
            method: 'GET',
            url: URL + 'locations.json'
        }).then(getLocations)
            .catch(handleError);

        function getLocations(res) {
            let inputName = input.val();
            let code;
            for (let key of res) {
                if (key.name === inputName){
                    code = key.code;
                }
            }

            $.ajax({
                method: 'GET',
                url: URL + `forecast/today/${code}.json`
            }).then(getCurrentCondition)
                .catch(handleError);

            $.ajax({
                method: 'GET',
                url: URL + `forecast/upcoming/${code}.json`
            }).then(getForecast)
                .catch(handleError);

            function getCurrentCondition(res) {
                let conditionSymbol = weatherSymbols[res.forecast.condition];
                let name = res.name;
                let temps = `${res.forecast.low}${degreeSymbol}/${res.forecast.high}${degreeSymbol}`;
                let condition = res.forecast.condition;
                let labelClass = $('<div class="label">Current conditions</div>');
                let symbolClass = $(`<span class="condition symbol">${conditionSymbol}</span>`);
                let conditionClass = $('<span class="condition"></span>');
                let nameSpan = $(`<span class="forecast-data">${name}</span>`);
                let tempsSpan = $(`<span class="forecast-data">${temps}</span>`);
                let weatherSpan = $(`<span class="forecast-data">${condition}</span>`);

                conditionClass
                    .append(nameSpan)
                    .append(tempsSpan)
                    .append(weatherSpan);

                currentDiv
                    .append(symbolClass)
                    .append(conditionClass);
            }

            function getForecast(res) {
                for (let key of res.forecast) {
                    let conditionSymbol = weatherSymbols[key.condition];
                    let temps = `${key.low}${degreeSymbol}/${key.high}${degreeSymbol}`;
                    let condition = key.condition;
                    let labelClass = $('<div class="label">Three-day forecast</div>');
                    let symbolClass = $(`<span class="condition symbol">${conditionSymbol}</span>`);
                    let conditionClass = $('<span class="condition"></span>');
                    let tempsSpan = $(`<span class="forecast-data">${temps}</span>`);
                    let weatherSpan = $(`<span class="forecast-data">${condition}</span>`);

                    conditionClass
                        .append(tempsSpan)
                        .append(weatherSpan);

                    upcomingDiv
                        .append(symbolClass)
                        .append(conditionClass);
                }
            }
        }
    }
    function handleError(err) {
        forecastDiv.text('Error').css('display', 'block');
    }
}