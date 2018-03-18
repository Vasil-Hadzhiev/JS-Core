function move(direction) {
    let towns = $('#towns');
    let townToMove = towns.find('option:selected');

    if (direction === 1) {
        townToMove.insertAfter(townToMove.next());
    } else {
        townToMove.insertBefore(townToMove.prev());
    }
}