function attachEvents() {
    const URL = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let loadBtn = $('#btnLoad').on('click', loadContacts);
    let createBtn = $('#btnCreate').on('click', createContact);
    let phonebook = $('#phonebook');
    let person = $('#person');
    let phone = $('#phone');

    function loadContacts() {
        phonebook.empty();
        $.ajax({
            method: 'GET',
            url: URL + '.json'
        }).then(handleSuccess)
            .catch(handleError);

        function handleSuccess(res) {
            for (let key in res) {
                let element = res[key];
                let li = $(`<li>${element.person}: ${element.phone} </li>`);
                let delBtn = $('<button>Delete</button>').on('click', () => deleteContact(key));
                li.append(delBtn);
                phonebook.append(li);
            }

            function deleteContact(contact) {
                $.ajax({
                    method: 'DELETE',
                    url: URL + '/' + contact + '.json'
                }).then(loadContacts)
                    .catch(handleError);
            }
        }
    }
    
    function createContact() {
        let post = JSON.stringify({
            person: person.val(),
            phone: phone.val()
        });

        person.val('');
        phone.val('');

        $.ajax({
            method: 'POST',
            url: URL + '.json',
            data: post
        }).then(loadContacts)
            .catch(handleError);
    }
}

function handleError(err) {

}