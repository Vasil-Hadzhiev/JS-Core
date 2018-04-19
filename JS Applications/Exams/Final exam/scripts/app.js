$(() => {
    const app = new Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', (ctx) => {
            ctx.loadPartials({
                footer: './templates/common/footer.hbs',
                loginForm: './templates/forms/loginForm.hbs',
                registerForm: './templates/forms/registerForm.hbs',
                textForm: './templates/forms/textForm.hbs'
            }).then(function () {
                this.partial('./templates/home/welcome-anonymous.hbs');
            });
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let passwordCheck = ctx.params.passwordCheck;

            if (username.length < 5) {
                notify.showError('Username must be at least 5 characters long.');
                return;
            } else if (password === '') {
                notify.showError('Password must not be empty.')
                return;
            } else if (password !== passwordCheck) {
                notify.showError('Passwords must match.');
                return;
            } else {
                auth.register(username, password)
                    .then((userInfo) => {
                        auth.saveSession(userInfo);
                        notify.showInfo('User registration successful.');
                        ctx.redirect('#/home');
                    })
                    .catch(notify.handleError);
            }
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username.length < 5) {
                notify.showError('Username must be at least 5 characters long.');
            } else if (password === '') {
                notify.showError('Password must not be empty.')
            } else {
                auth.login(username, password)
                    .then((userInfo) => {
                        auth.saveSession(userInfo);
                        notify.showInfo('Login successful.');
                        ctx.redirect('#/home');

                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    notify.showInfo("Logout successful.");
                    ctx.redirect("index.html");
                })
                .catch(notify.handleError);
        });

        this.get('#/home', (ctx) => {
            ctx.username = sessionStorage.getItem('username');
            let total = 0;
            let productCount = 0;
            let currentReceipt;

            receipt.getActiveReceipt()
                .then((receiptInfo) => {
                    if (receiptInfo.length === 0) {
                        receipt.createReceipt()
                            .then((newReceipt) => {
                                currentReceipt = newReceipt;
                                ctx.total = 0;
                                ctx.productCount = 0;
                                ctx.receitId = newReceipt._id;

                                ctx.loadPartials({
                                    header: './templates/common/header.hbs',
                                    footer: './templates/common/footer.hbs',
                                    entry: './templates/receipt/entry.hbs',
                                    entryList: './templates/receipt/entryList.hbs',
                                    checkout: './templates/receipt/checkout.hbs',
                                    createEntryForm: './templates/forms/createEntryForm.hbs'
                                }).then(function () {
                                    this.partial('./templates/receipt/activeReceipt.hbs');
                                });
                            })
                    } else {
                        currentReceipt = receiptInfo[0];
                        let receiptId = currentReceipt._id;
                        entry.getEntriesByReceiptId(receiptId)
                            .then((entries) => {
                                entries.forEach(e => {
                                    e.subTotal = (e.qty * e.price).toFixed(2);
                                    total += Number(e.subTotal);
                                    productCount++;
                                });

                                ctx.entries = entries;
                                ctx.total = total.toFixed(2);
                                ctx.productCount = productCount;
                                ctx.receiptId = receiptId;

                                ctx.loadPartials({
                                    header: './templates/common/header.hbs',
                                    footer: './templates/common/footer.hbs',
                                    entry: './templates/receipt/entry.hbs',
                                    entryList: './templates/receipt/entryList.hbs',
                                    checkout: './templates/receipt/checkout.hbs',
                                    createEntryForm: './templates/forms/createEntryForm.hbs'
                                }).then(function () {
                                    this.partial('./templates/receipt/activeReceipt.hbs');
                                });
                            })
                    }
                });
        });

        this.post('#/createEntry', (ctx) => {
            let type = ctx.params.type;
            let qty = ctx.params.qty;
            let price = ctx.params.price;

            if (type === '') {
                notify.showError('Type must not be an empty field.');
                return;
            } else if (isNaN(qty)) {
                notify.showError('Quantity must be a number.');
                return;
            } else if (isNaN(price)) {
                notify.showError('Price must be a number.');
                return;
            }

            price = parseFloat(price).toFixed(2);

            receipt.getActiveReceipt()
                .then((receipts) => {
                    let receiptId = receipts[0]._id;

                    entry.addEntry(type, qty, price, receiptId)
                        .then(() => {
                            notify.showInfo('Entry added');
                            ctx.redirect('#/home');
                        })
                        .catch(notify.handleError);
                })
                .catch(notify.handleError);
        });

        this.get('#/delete/:entryId', (ctx) => {
            let entryId = ctx.params.entryId;

            entry.deleteEntry(entryId)
                .then(() => {
                    notify.showInfo('Entry removed.');
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        this.post('#/checkout', (ctx) => {
            let receiptId = ctx.params.receiptId;
            let productCount = ctx.params.productCount;
            let total = ctx.params.total;

            if (productCount > 0) {
                receipt.commitReceipt(receiptId, productCount, total)
                    .then(() => {
                        notify.showInfo('Receipt checked out.');
                        ctx.redirect('#/home');
                    })
                    .catch(notify.handleError);
            } else {
                notify.showInfo('No entries.');
                ctx.redirect('#/home');
            }
        });

        this.get('#/overview', (ctx) => {
            ctx.username = sessionStorage.getItem('username');

            receipt.getMyReceipts()
                .then((receipts) => {
                    receipts.forEach(r => {
                        let date = new Date(r._kmd.ect);
                        r.date = transformDate(date);
                    });

                    ctx.receipts = receipts;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        receipt: './templates/receipt/receipt.hbs',
                        receiptsList: './templates/receipt/receiptsList.hbs'
                    }).then(function () {
                        this.partial('./templates/receipt/myReceipts.hbs');
                    });
                });
        });

        this.get('#/details/:receiptId', (ctx) => {
            let receiptId = ctx.params.receiptId;

            entry.getEntriesByReceiptId(receiptId)
                .then((entries) => {
                    entries.forEach(e => {
                        e.subTotal = (e.price * e.qty).toFixed(2);
                    });
                    ctx.details = entries;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        entryDetails: './templates/receipt/entryDetails.hbs',
                        detailsList: './templates/receipt/detailsList.hbs'
                    }).then(function () {
                        this.partial('./templates/receipt/details.hbs');
                    })
                })
        })
    });

    app.run();
});

function transformDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getUTCDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    return `${year}-${month}-${day} ${hour}:${minutes}`;
}