function loadCommits() {
    const URL = 'https://api.github.com/repos/';
    let commits = $('#commits');
    let username = $('#username');
    let repository = $('#repo');

    $.ajax({
        method: 'GET',
        url: URL + username.val() + '/' + repository.val() + '/commits'
    }).then(handleSuccess)
        .catch(handleError);

    function handleSuccess(res) {
        commits.empty();
        for (let key of res) {
            let name = key.commit.author.name;
            let msg = key.commit.message;
            let li = $(`<li>${name}: ${msg}</li>`);
            commits.append(li);
        }
    }

    function handleError(err) {
        commits.empty();
        let liError = $(`<li>Error: ${err.status} (${err.statusText})</li>`);
        commits.append(liError);
    }
}