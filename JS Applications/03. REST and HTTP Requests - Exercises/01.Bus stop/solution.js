function getInfo() {
    const URL = 'https://judgetests.firebaseio.com/businfo/';
    let inputId = $('#stopId').val();
    let stopName = $('#stopName');
    let busesUl = $('#buses');

    busesUl.empty();

    let req = $.ajax({
        method: 'GET',
        url: URL + inputId + '.json'
    }).then(handleSuccess)
        .catch(handleError);

    function handleSuccess(res) {
        stopName.text(res.name);
        let busesInfo = res.buses;
        for (let key in busesInfo) {
            let li = $(`<li>Bus ${key} arrives in ${busesInfo[key]} minutes</li>`)
            busesUl.append(li);
        }
    }
    
    function handleError() {
        stopName.text('Error');
    }
}