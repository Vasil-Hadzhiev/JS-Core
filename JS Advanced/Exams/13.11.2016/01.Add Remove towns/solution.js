function attachEvents() {
    let towns = $('#towns');

    let addBtn = $('#btnAdd').on('click', () => {
        let newItem = $('#newItem').val();
        if(newItem === ''){
            return;
        }
        towns.append(`<option>${newItem}</option>`);
        $('#newItem').val('');
    });
    let delBtn = $('#btnDelete').on('click', () => {
        towns.find('option:selected').remove();
    });
}