function attachAllEvents() {
    // Attach events on menu links
    $('#linkHome').on('click', showHomeView);
    $('#linkLogin').on('click', showLoginView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkCreateAd').on('click', showCreateAdView);
    $('#linkListAds').on('click', showListAdsView);
    $('#linkLogout').on('click', logoutUser);

    // Attach events on buttons
    $('#buttonRegisterUser').on('click', registerUser);
    $('#buttonLoginUser').on('click', loginUser);
    $('#buttonCreateAd').on('click', createAd);
    $('#buttonEditAd').on('click', editAd);

    // Bind the info / error boxes
    $("#infoBox, #errorBox").on('click', function() {
        $(this).fadeOut()
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    })
}