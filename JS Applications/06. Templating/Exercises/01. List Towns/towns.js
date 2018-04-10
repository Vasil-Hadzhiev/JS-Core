function attachEvents() {
    let townsId = $('#towns');
    let root = $('#root');
    let loadBtn = $('#btnLoadTowns').on('click', loadTowns);

    function loadTowns() {
        let towns = [];
        let inputTowns = townsId.val();
        if (inputTowns.length === 0) {
            root.append('<i>(empty)<i>');
            return;
        }

        inputTowns.split(', ').map(t => towns.push({town: t}));

        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);
        let townsObj = {
            towns: towns
        };
        let townsList = template(townsObj);
        root.append(townsList);
        townsId.val('');
    }
}