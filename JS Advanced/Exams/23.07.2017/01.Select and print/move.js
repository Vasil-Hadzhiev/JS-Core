function move(command) {
    let availableTownsList = $('#available-towns');
    let selectedTownsList = $('#selected-towns');
    let outputDiv = $('#output');

    if(command === 'right'){
        selectedTownsList.append(availableTownsList.find(':selected'));
    } else if(command === 'left'){
        availableTownsList.append(selectedTownsList.find(':selected'));
    } else {
        let allTowns = selectedTownsList
            .find('option')
            .toArray()
            .map(el => $(el).text())
            .join('; ');

        outputDiv.text(allTowns);
    }
}