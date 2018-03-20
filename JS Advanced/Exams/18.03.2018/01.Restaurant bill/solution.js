function addProduct() {
    let tbody = $('#product-list');
    let tfoot = $('#bill').find('tfoot');
    let tr = tfoot.find('tr');

    let priceChild = $(tr).children().eq(1);
    let total = Number(priceChild.html());

    let inputProduct = $('#add-product');
    let productName = inputProduct.find('input[type=text]').val();
    let productPrice = inputProduct.find('input[type=number]').val();

    if(productName !== '' && productPrice !== ''){
        let trDiv = $('<tr>');
        trDiv
            .append(`<td>${productName}</td>`)
            .append(`<td>${productPrice}</td>`);

        tbody.append(trDiv);

        inputProduct.find('input[type=text]').val('');
        inputProduct.find('input[type=number]').val('');

        total += Number(productPrice);
        priceChild.html(total);
    }
}