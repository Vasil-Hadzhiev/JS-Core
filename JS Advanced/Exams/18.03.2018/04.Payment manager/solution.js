class PaymentManager {
    constructor(title) {
        this.title = title;
        this.element = this.createElement();
    }

    createElement() {
        //create table
        let table = $('<table>');

        //create caption
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);

        //create header
        let head = $('<thead>');
        let headRow = $('<tr>');
        let nameTh = $('<th class="name">Name</th>');
        let categoryTh = $('<th class="category">Category</th>');
        let priceTh = $('<th class="price">Price</th>');
        let actionsTh = $('<th>Actions</th>');
        head
            .append(headRow)
            .append(nameTh)
            .append(categoryTh)
            .append(priceTh)
            .append(actionsTh);

        //create body
        let body = $('<tbody class="payments">');

        //create footer
        let foot = $('<tfoot>');
        let footRow = $('<tr>');
        let nameTd = $('<td><input name="name" type="text"></td>');
        let categoryTd = $('<td><input name="category" type="text"></td>');
        let priceTd = $('<td><input name="price" type="number"></td>');
        let addBtn = ($('<td><button>Add</button></td>'));
        footRow
            .append(nameTd)
            .append(categoryTd)
            .append(priceTd)
            .append(addBtn);
        foot.append(footRow);

        addBtn.on('click', function () {
            let inputName = nameTd.find('input');
            let inputCategory = categoryTd.find('input');
            let inputPrice = priceTd.find('input');
            if(inputName.val() !== '' && inputCategory.val() !== '' && inputPrice.val() !== ''){
                let bodyRow = $('<tr>');
                let name = $(`<td>${inputCategory.val()}</td>`);
                let category = $(`<td>${inputCategory.val()}</td>`);
                let price = $(`<td>${Number(inputPrice.val())}</td>`);
                let delBtn = $('<td><button>Delete</button></td>');
                bodyRow
                    .append(name)
                    .append(category)
                    .append(price)
                    .append(delBtn);

                body.append(bodyRow);

                delBtn.on('click', function () {
                    bodyRow.remove();
                });
            }
            inputName.val('');
            inputCategory.val('');
            inputPrice.val('');
        });

        table
            .append(caption)
            .append(head)
            .append(body)
            .append(foot);

        return table;
    }

    render(id){
        $('#' + id).append(this.element);
    }
}