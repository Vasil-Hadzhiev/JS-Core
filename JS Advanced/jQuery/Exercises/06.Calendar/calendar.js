function calendar([day, month, year]) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date(year, month - 1, day);
    let captionText = months[month - 1] + ' ' + year;

    $('#content').append($('<table>').append($('<caption>').text(captionText)).append($('<tbody>')));

    //create heading
    $('tbody').append($('<tr>').append($('<th>').text("Mon")).append($('<th>').text("Tue")).append($('<th>').text("Wed")).append($('<th>').text("Thu")).append($('<th>').text("Fri")).append($('<th>').text("Sat")).append($('<th>').text("Sun")));

    let numberOfDays = 0;
    let lastDayInMonth = new Date(year, month, 0);
    numberOfDays += lastDayInMonth.getDate();
    let prevMonthLastDay = (new Date(year, month - 1, 0)).getDay();
    let nextMonthFirstDay = (7 - new Date(year, month, 0).getDay() % 7) % 7;
    numberOfDays += prevMonthLastDay + nextMonthFirstDay;

    let counter = 0 - prevMonthLastDay + 1;

    for (let i = 0; i < numberOfDays / 7; i++) {
        $('tbody').append($('<tr>'));
        for (let j = 0; j < 7; j++) {
            let currentDay;
            if (counter < 1 || counter > lastDayInMonth.getDate()) {
                currentDay = "";
            } else {
                currentDay = counter;
            }

            if (currentDay === today.getDate()) {
                $('tbody tr:last-child').append($('<td>').addClass('today').text(currentDay));
            } else {
                $('tbody tr:last-child').append($('<td>').text(currentDay));
            }

            counter++;
        }
    }
}