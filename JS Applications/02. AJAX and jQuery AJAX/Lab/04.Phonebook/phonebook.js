const URL = 'https://phonebook-8f5d0.firebaseio.com/phonebook';

$('#btnLoad').on('click', loadData);
$('#btnCreate').on('click', postData);

function loadData() {
    $('#phonebook').empty();
    $.ajax({
        method: 'GET',
        url: URL + '.json'
    }).then(handleSuccess)
        .catch(handleError);

    function handleSuccess(res) {
        for (let key in res) {
            generateLi(res[key].name, res[key].phone, key);
        }
    }
}

function postData() {
    let person = $('#person');
    let phone = $('#phone');
    let name = person.val();
    let number = phone.val();
    let postData = JSON.stringify({'name': name, 'phone': number});

    $.ajax({
        method: 'POST',
        url: URL + '.json',
        data: postData,
        success: appendElement,
        error: handleError
    });

    function appendElement(res) {
        generateLi(name, number, res.name);
    }

    person.val('');
    phone.val('');
}

function generateLi(name, phone, key) {
    let li = $(`<li>${name}: ${phone} </li>`)
        .append($('<a href="#">[Delete]</a>').on('click', function () {
            $.ajax({
                method: 'DELETE',
                url: URL + '/' + key + '.json'
            }).then(() => $(li).remove())
                .catch(handleError)
        }));
    $('#phonebook').append(li);
}

function handleError() {

}