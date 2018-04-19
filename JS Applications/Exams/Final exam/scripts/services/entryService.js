let entry = (() => {
    function getEntriesByReceiptId(receiptId) {
        let endpoint = `entries?query={"receiptId":"${receiptId}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function addEntry(type, qty, price, receiptId) {
        let data = {
            type: type,
            qty: qty,
            price: price,
            receiptId: receiptId
        };

        return remote.post('appdata', 'entries', 'kinvey', data);
    }

    function deleteEntry(entryId) {
        let endpoint = `entries/${entryId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    return {
        getEntriesByReceiptId,
        addEntry,
        deleteEntry
    }
})();