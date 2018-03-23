function attachEvents() {
    const URL = 'https://messenger-60058.firebaseio.com/messenger';
    $('#submit').on('click', submit);
    $('#refresh').on('click', refresh);
    let messageBox = $('#messages');
    let result = '';

    function submit() {
        let currentText = $('#messages').text();
        let inputName = $('#author');
        let inputMsg = $('#content');

        let msgObj = JSON.stringify({
            author: inputName.val(),
            content: inputMsg.val(),
            timestamp: Date.now()
        });

        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data: msgObj
        }).then(refresh)
            .catch(handleError);

        inputName.val('');
        inputMsg.val('');
    }

    function refresh() {
        $.ajax({
            method: 'GET',
            url: URL + '.json'
        }).then(handleSuccess)
            .catch(handleError);

        function handleSuccess(res) {
            for (let key in res) {
                result += res[key].author + ': ' + res[key].content + '\n';
            }
            messageBox.text(result.trim());
            result = '';
        }
    }

    function handleError(err) {

    }
}