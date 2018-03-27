function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_ryxGAnD5f/biggestCatches';
    const USERNAME = 'Vasish';
    const PASSWORD = 'v';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};

    $('.load').on('click', loadCatches);
    $('.add').on('click', createNewCatch);

    function loadCatches() {
        $.ajax({
            method: 'GET',
            url: URL,
            headers: AUTH
        }).then(loadSuccess)
            .catch(handleError);

        function loadSuccess(data) {
            let catches = $('#catches');
            catches.empty();
            for (let key of data) {
                let catchTemplate = $('<div>')
                    .addClass('catch')
                    .attr('data-id', key._id);
                let anglerLabel = $('<label>Angler</label>');
                let inputAngler = $(`<input type="text" class="angler" value="${key.angler}"/>`);
                let weightLabel = $('<label>Weight</label>');
                let inputWeight = $(`<input type="number" class="weight" value="${key.weight}"/>`);
                let speciesLabel = $('<label>Species</label>');
                let inputSpecies = $(`<input type="text" class="species" value="${key.species}"/>`);
                let locationLabel = $('<label>Location</label>');
                let inputLocation = $(`<input type="text" class="location" value="${key.location}"/>`);
                let baitLabel = $('<label>Bait</label>');
                let inputBait= $(`<input type="text" class="bait" value="${key.bait}"/>`);
                let timeLabel = $('<label>Capture Time</label>');
                let inputTime = $(`<input type="number" class="captureTime" value="${key.captureTime}"/>`);
                let updateBtn = $('<button class="update">Update</button>').on('click', () => updateCatch(key._id));
                let deleteBtn = $('<button class="delete">Delete</button>').on('click', () => deleteCatch(key._id));

                function updateCatch(id) {
                    let updatedAngler = catchTemplate.find('.angler').val();
                    let updatedWeight = Number(catchTemplate.find('.weight').val());
                    let updatedSpecies = catchTemplate.find('.species').val();
                    let updatedLocation = catchTemplate.find('.location').val();
                    let updatedBait = catchTemplate.find('.bait').val();
                    let updatedTime = Number(catchTemplate.find('.captureTime').val());
                    let updatedCatch = JSON.stringify({
                        'angler': updatedAngler,
                        'weight': updatedWeight,
                        'species': updatedSpecies,
                        'location': updatedLocation,
                        'bait': updatedBait,
                        'captureTime': updatedTime
                    });

                    $.ajax({
                        method: 'PUT',
                        url: URL + '/' + id,
                        data: updatedCatch,
                        headers: AUTH,
                        contentType: 'application/json'
                    }).then(loadCatches)
                        .catch(handleError);
                }

                function deleteCatch(id) {
                    $.ajax({
                        method: 'DELETE',
                        url: URL + '/' + id,
                        headers: AUTH,
                        contentType: 'application/json'
                    }).then(deleteSuccess)
                        .catch(handleError);

                    function deleteSuccess() {
                        catchTemplate.remove();
                    }
                }

                catchTemplate
                    .append(anglerLabel)
                    .append(inputAngler)
                    .append(weightLabel)
                    .append(inputWeight)
                    .append(speciesLabel)
                    .append(inputSpecies)
                    .append(locationLabel)
                    .append(inputLocation)
                    .append(baitLabel)
                    .append(inputBait)
                    .append(timeLabel)
                    .append(inputTime)
                    .append(updateBtn)
                    .append(deleteBtn);

                catches.append(catchTemplate);
            }
        }
    }

    function createNewCatch() {
        let addForm = $('#addForm');
        let inputAngler = addForm.find('.angler');
        let inputWeight = addForm.find('.weight');
        let inputSpecies = addForm.find('.species');
        let inputLocation = addForm.find('.location');
        let inputBait = addForm.find('.bait');
        let inputTime = addForm.find('.captureTime');
        let catchObj = JSON.stringify({
            'angler': inputAngler.val(),
            'weight': Number(inputWeight.val()),
            'species': inputSpecies.val(),
            'location': inputLocation.val(),
            'bait': inputBait.val(),
            'captureTime': Number(inputTime.val())
        });

        $.ajax({
            method: 'POST',
            url: URL,
            data: catchObj,
            headers: AUTH,
            contentType: 'application/json'
        }).then(loadCatches)
            .catch(handleError);

        inputAngler.val('');
        inputWeight.val('');
        inputSpecies.val('');
        inputLocation.val('');
        inputBait.val('');
        inputTime.val('');
    }

    function handleError(err) {

    }
}