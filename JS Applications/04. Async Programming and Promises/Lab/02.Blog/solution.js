function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_ryLVRw89f/';
    const USERNAME = 'peter';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};

    let posts = $('#posts');
    let comments = $('#post-comments');
    let loadBtn = $('#btnLoadPosts').on('click', loadPosts);
    let viewBtn = $('#btnViewPost').on('click', viewPosts);

    function loadPosts() {
        $.ajax({
            method: 'GET',
            url: URL + 'posts',
            headers: AUTH
        }).then(handleSuccess)
            .catch(handleError);

        function handleSuccess(res) {
            posts.empty();
            for (let post of res) {
                let option = $(`<option value = "${post._id}">${post.title}</option>`);
                posts.append(option);
            }
        }
    }

    function viewPosts() {
        let selectedPostId = posts.find('option:selected').val();

        $.ajax({
            method: 'GET',
            url: URL + 'posts/' + selectedPostId,
            headers: AUTH
        }).then(postDetails)
            .catch(handleError);

        $.ajax({
            method: 'GET',
            url: URL + `comments/?query={"post_id":"${selectedPostId}"}`,
            headers: AUTH
        }).then(postComments)
            .catch(handleError);

        function postDetails(res) {
            $('#post-title').text(res.title);
            $('#post-body').text(res.body);
        }

        function postComments(res) {
            comments.empty();
            for (let comment of res) {
                let liComment = $(`<li>${comment.text}</li>`);
                comments.append(liComment);
            }
        }
    }
}

function handleError(err) {

}