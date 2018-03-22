function loadRepos() {
    $('#repos').empty();
    let url = 'https://api.github.com/users/' + $('#username').val() + '/repos';
    $.ajax({
        method: 'GET',
        url: url,
        success: displayRepos,
        error: displayError
    });

    function displayRepos(res) {
        for (let repo of res) {
            $('#repos').append(
                $('<li>').append(
                    $(`<a href="${repo.html_url}">${repo.full_name}</a>`)
                )
            )
        }
    }

    function displayError(err) {
        console.log(err);
    }
}