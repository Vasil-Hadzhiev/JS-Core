let createBook;

createBook = (function () {
    let id = 1;

    return (selector, titleStr, authorStr, ISBN) => {
        let container = $(selector);

        //create book
        let book = $('<div>');
        book.attr('id', 'book' + id);

        //create title
        let title = $('<p>');
        title.addClass('title');
        title.text(titleStr);

        //create author
        let author = $('<p>');
        author.addClass('author');
        author.text(authorStr);

        //create isbn
        let isbn = $('<p>');
        isbn.addClass('isbn');
        isbn.text(ISBN);

        //create buttons and add events
        let selectBtn = $('<button>Select</button>').on('click', function () {
            book.css('border', '2px solid blue');
        });
        let deselectBtn = $('<button>Deselect</button>').on('click', function () {
            book.css('border', 'none');
        });

        //append to book and container
        book.append(title);
        book.append(author);
        book.append(isbn);
        book.append(selectBtn);
        book.append(deselectBtn);
        book.appendTo(container);
    }
}());