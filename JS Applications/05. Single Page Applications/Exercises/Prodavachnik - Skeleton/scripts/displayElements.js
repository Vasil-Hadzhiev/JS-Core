function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

function showHideMenuLinks() {
    if (sessionStorage.getItem('authToken') === null){
        $('#linkHome').show();
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkLogout').hide();
        $('#linkCreateAd').hide();
        $('#linkListAds').hide();
    } else {
        $('#linkHome').show();
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkLogout').show();
        $('#linkCreateAd').show();
        $('#linkListAds').show();
    }
}

function showInfo(message) {
    let infoBox = $('#infoBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}

function showError(errorMsg) {
    let errorBox = $('#errorBox');
    errorBox.text("Error: " + errorMsg);
    errorBox.show();
}

function showHomeView() {
    showView('viewHome');
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    showView('viewRegister');
    $('#formRegister').trigger('reset');

}

function showCreateAdView() {
    showView('viewCreateAd');
    $('#formCreateAd').trigger('reset');
}

function showListAdsView() {
    showView('viewAds');
    listAds();
}

function showEditAdView() {
    showView('viewEditAd');
}