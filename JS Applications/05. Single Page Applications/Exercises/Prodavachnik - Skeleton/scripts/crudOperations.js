const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_rJ4MRVA5f';
const APP_SECRET = 'b2433ea055a840d98a81f7f7a5224bf0';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

function registerUser() {
    let formRegister = $('#formRegister');
    let username = formRegister.find('input[name=username]').val();
    let password = formRegister.find('input[name=passwd]').val();
    let data = JSON.stringify({username, password});

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY,
        data: data,
        headers: AUTH_HEADERS,
        contentType: 'application/json'
    }).then(function (res) {
        signInUser(res, 'Successfully registered!');
    }).catch(handleAjaxError);
}

function loginUser() {
    let formLogin = $('#formLogin');
    let username = formLogin.find('input[name=username]').val();
    let password = formLogin.find('input[name=passwd]').val();
    let data = JSON.stringify({username, password});

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        data: data,
        headers: AUTH_HEADERS,
        contentType: 'application/json'
    }).then(function (res) {
        signInUser(res, 'Successfully logged in !');
    }).catch(handleAjaxError);
}

function createAd() {
    let form = $('#formCreateAd');
    let title = form.find('input[name=title]').val();
    let description = form.find('textarea[name=description]').val();
    let date = form.find('input[name=datePublished]').val();
    let price = form.find('input[name=price]').val();
    let publisher = sessionStorage.getItem('username');
    let ad = JSON.stringify({
        'Title': title,
        'Description': description,
        'Publisher': publisher,
        'Date Published': date.toString('yyyy-MM-dd'),
        'Price': Number(price)
    });

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts',
        data: ad,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        contentType: 'application/json'
    }).then(function () {
        listAds();
        showInfo('Ad created successfully');
    }).catch(handleAjaxError);
}

function displayAds(ads) {
    for (let ad of ads) {
        let tr = $('<tr>');
        let titleTh = $(`<td>${ad.Title}</td>`);
        let publisherTh = $(`<td>${ad.Publisher}</td>`);
        let descriptionTh = $(`<td>${ad.Description}</td>`);
        let priceTh = $(`<td>${ad.Price}</td>`);
        let dateTh = $(`<td>${ad['Date Published']}</td>`);

        tr.append(titleTh)
            .append(publisherTh)
            .append(descriptionTh)
            .append(priceTh)
            .append(dateTh);

        if (sessionStorage.getItem('userId') === ad._acl.creator){
            let actionsTd = $('<td>');
            let deleteBtn = $('<a href="#">[Delete]<a/>').on('click', () => deleteAd(ad));
            let editBtn = $('<a href="#">[Edit]</a>').on('click', () => loadAdForEdit(ad));

            actionsTd.append(deleteBtn)
                .append(editBtn);

            tr.append(actionsTd);
        }

        function deleteAd(ad) {
            $.ajax({
                method: 'DELETE',
                url:  BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + ad._id,
                headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
            }).then(function () {
                listAds();
                showInfo('Ad deleted');
            }).catch(handleAjaxError);
        }

        function loadAdForEdit(ad) {
            showEditAdView();
            let form = $('#formEditAd');
            form.find('input[name=id]').val(ad._id);
            form.find('input[name=publisher]').val(ad.Publisher);
            form.find('input[name=title]').val(ad.Title);
            form.find('textarea[name=description]').val(ad.Description);
            form.find('input[name=datePublished]').val(ad['Date Published']);
            form.find('input[name=price]').val(ad.Price);
        }

        $('#ads').find('table').append(tr);
    }
}

function editAd() {
    let form = $('#formEditAd');
    let id = form.find('input[name=id]').val();
    let publisher = form.find('input[name=publisher]').val();
    let title = form.find('input[name=title]').val();
    let description = form.find('textarea[name=description]').val();
    let date = form.find('input[name=datePublished]').val();
    let price = form.find('input[name=price]').val();

    let editedData = JSON.stringify({
        'Title': title,
        'Description': description,
        'Publisher': publisher,
        'Date Published': date.toString('yyyy-MM-dd'),
        'Price': Number(price)
    });

    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: editedData,
        contentType: 'application/json'
    }).then(function () {
        listAds();
        showInfo('Ad edited.');
    })
}

function listAds() {
    let table = $('#ads').find('table');
    table.find('tr').each((index, el) => {
        if(index > 0) {
            $(el).remove();
        }
    });

    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {

        showView('viewAds');
        displayAds(res)
    }).catch(handleAjaxError);
}

function logoutUser() {
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    showInfo('Successfully logged out!');
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}