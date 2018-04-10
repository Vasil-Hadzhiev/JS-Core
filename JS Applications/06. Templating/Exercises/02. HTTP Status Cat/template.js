$(() => {
    let cats = $('#allCats');

    renderCatTemplate();

    function renderCatTemplate() {
        let source = $('#cat-template').html();
        let catTemplate = Handlebars.compile(source);
        let context = {cats: window.cats};
        let catObj = catTemplate(context);
        cats.append(catObj);

        cats.find('button').on('click', function () {
            if ($(this).text() === 'Show status code') {
                $(this).text('Hide status code');
                $(this).next().show();
            } else {
                $(this).text('Show status code');
                $(this).next().hide();
            }
        });
    }
});