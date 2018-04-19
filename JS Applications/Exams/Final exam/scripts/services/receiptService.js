let receipt = (() => {
    function getActiveReceipt() {
        let userId = sessionStorage.getItem('userId');
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createReceipt() {
        let data = {
            active: true,
            productCount: 0,
            total: 0
        };

        return remote.post('appdata', 'receipts', 'kinvey', data);
    }
    
    function getMyReceipts() {
        let userId = sessionStorage.getItem('userId');
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function commitReceipt(receiptId, productCount, total) {
        let data = {
            active: false,
            productCount: productCount,
            total: total
        };

        let endpoint = `receipts/${receiptId}`;

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function getReceiptDetails(receiptId) {
        let endpoint = `receipts/${receiptId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getActiveReceipt,
        createReceipt,
        getMyReceipts,
        commitReceipt,
        getReceiptDetails
    }
})();