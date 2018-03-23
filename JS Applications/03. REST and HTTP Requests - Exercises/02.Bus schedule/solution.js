function solve() {
    const URL = 'https://judgetests.firebaseio.com/schedule/';
    const infoDiv = $('#info').find('span');
    const departBtn = $('#depart');
    const arriveBtn = $('#arrive');
    let stopId = 'depot';
    let arriveStop = '';

    function depart() {
        departBtn.attr('disabled', true);
        arriveBtn.attr('disabled', false);
        $.ajax({
            method: 'GET',
            url: URL + stopId + '.json'
        }).then(handleSuccess)
            .catch(handleError);

        function handleSuccess(res) {
            infoDiv.text(`Next stop ${res.name}`);
            arriveStop = res.name;
            stopId = res.next;
        }

        function handleError(err) {
            infoDiv.text('Error');
            departBtn.attr('disabled', true);
            arriveBtn.attr('disabled', true);
        }
    }

    function arrive() {
        departBtn.attr('disabled', false);
        arriveBtn.attr('disabled', true);

        infoDiv.text(`Arriving at ${arriveStop}`);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();