function domSearch(selector, isCaseSensitive) {
    let container = $(selector);
    container.addClass('items-control');

    //create add-controls
    let addBtn = $('<a>').addClass('button')
        .css('display', 'inline-block')
        .text('Add')
        .on('click', addNewItem);

    let addControl = $('<div>').addClass('add-controls')
        .append($('<label>Enter text: </label>')
            .append('<input>'))
        .append(addBtn);

    addControl.appendTo(container);

    //create search-controls
    let searchControl = $('<div>').addClass('search-controls')
        .append($('<label>Search:</label>')
            .append('<input>'))
        .on('input', searchItems);

    searchControl.appendTo(container);

    //create result-controls
    let resultControl = $('<div>').addClass('result-controls');
    let itemsList = ($('<ul>').addClass('items-list'));
    resultControl.append(itemsList);
    resultControl.appendTo(container);

    function addNewItem(event) {
        let textItemToAdd = $('.add-controls input').val();
        let itemToAdd = $('<li>').addClass('list-item');
        let deleteBtn = $('<a>').addClass('button').text('X');
        deleteBtn.on('click', deleteItem);
        itemToAdd.append(deleteBtn);
        itemToAdd.append(`<strong>${textItemToAdd}</strong>`);
        itemToAdd.appendTo(itemsList);
        $('.add-controls input').val('');
    }

    function deleteItem() {
        $(this).parent().remove();
    }

    function searchItems() {
        let text = $('.search-controls input').val();

        $('.list-item').each((index, li) => matches(li, text));

        function matches(li, text) {
            $(li).css('display', 'block');
            if (isCaseSensitive) {
                if ($(li).find('strong').text().indexOf(text) < 0) {
                    $(li).css('display', 'none');
                }
            } else {
                if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) < 0) {
                    $(li).css('display', 'none');
                }
            }
        }
    }
}