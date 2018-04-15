$(() => {
    const app = new Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', (ctx) => {
            if (auth.isAuth()) {
                ctx.redirect('#/feed');
            } else {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/forms/loginForm.hbs');
                })
            }
        });

        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs');
            })
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username.length < 5) {
                notify.showError('Username should be more at least 5 characters long.');
                return;
            }

            if (password === '') {
                notify.showError('Password must not be empty!');
            }

            auth.login(username, password)
                .then(function (userData) {
                    notify.showInfo('Login successful.');
                    auth.saveSession(userData);
                    ctx.redirect('#/feed');
                })
                .catch(notify.handleError);
        });

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs');
            })
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (username.length < 5) {
                notify.showError('Username should be more at least 5 characters long.');
                return;
            }

            if (password === '') {
                notify.showError('Password must not be empty!');
            }

            if (password !== repeatPass) {
                notify.showError('Passwords must match!');
                return;
            }

            auth.register(username, password)
                .then(function (userData) {
                    notify.showInfo('User registration successful.');
                    auth.saveSession(userData);
                    ctx.redirect('#/feed');
                })
                .catch(notify.handleError);
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(function () {
                    notify.showInfo('Logout successful.');
                    ctx.redirect('#/login');
                    sessionStorage.clear();
                })
                .catch(notify.handleError);
        });

        this.get('#/feed', (ctx) => {
            let subsArr = JSON.parse(sessionStorage.getItem('subscriptions')).map(e => `"${e}"`);
            let username = sessionStorage.getItem('username');

            Promise.all([chirps.loadAllChirpsByUsername(username), user.loadUserFollowers(username)])
                .then(([chirpsArr, followersArr]) => {
                    let chirpsCount = chirpsArr.length;
                    let following = JSON.parse(sessionStorage.getItem('subscriptions')).length;
                    let followers = followersArr.length;

                    chirps.loadFollowersChirps(subsArr)
                        .then((followersChirps) => {
                            followersChirps.forEach(c => {
                                c.time = calcTime(c._kmd.ect);
                            });

                            ctx.username = username;
                            ctx.chirpsCount = chirpsCount;
                            ctx.following = following;
                            ctx.followers = followers;
                            ctx.chirps = followersChirps;

                            ctx.loadPartials({
                                header: './templates/common/header.hbs',
                                footer: './templates/common/footer.hbs',
                                menu: './templates/common/menu.hbs',
                                createChirpForm: './templates/common/createChirpForm.hbs',
                                userStats: './templates/common/userStats.hbs',
                                chirp: './templates/common/chirp.hbs',
                                chirpList: './templates/common/chirpList.hbs'
                            }).then(function () {
                                this.partial('./templates/feeds/homeFeed.hbs');
                            })
                        }).catch(notify.handleError)

                })
                .catch(notify.handleError);
        });

        this.post('#/createChirp', (ctx) => {
            let text = ctx.params.text;
            let author = sessionStorage.getItem('username');

            if(text === ''){
                notify.showError('Chirp text cannot be empty!');
                return;
            }

            if(text.length > 150){
                notify.showError('Chirp text cannot be longer than 150 characters!');
                return;
            }

            chirps.createChirp(text, author)
                .then(function () {
                    notify.showInfo('Chirp published.')
                    ctx.redirect('#/profile');
                })
                .catch(notify.handleError);
        });

        this.get('#/deleteChirp/:id', (ctx) => {
            let chirpId = ctx.params.id.substr(1);

            chirps.deleteChirp(chirpId)
                .then(() => {
                    notify.showInfo('Chirp deleted.');
                    ctx.redirect('#/profile');
                })
                .catch(notify.handleError);
        });

        this.get('#/profile', (ctx) => {
            let username = ctx.params.username;

            if(username){
                username = username.substr(1);
            } else {
                username = sessionStorage.getItem('username');
            }

            Promise.all([chirps.loadAllChirpsByUsername(username), user.loadUserFollowers(username), user.loadUserByUsername(username)])
                .then(([chirpsArr, followersArr, user]) => {
                    let chirpsCount = chirpsArr.length;
                    let following = user[0].subscriptions.length;
                    let followers = followersArr.length;

                    chirpsArr.forEach(c => {
                        c.time = calcTime(c._kmd.ect);
                        c.isAuthor = c.author === sessionStorage.getItem('username');
                    });

                    ctx.username = username;
                    ctx.chirpsCount = chirpsCount;
                    ctx.following = following;
                    ctx.followers = followers;
                    ctx.chirps = chirpsArr;
                    ctx.isCurrentlyLogged = ctx.params.username === undefined;
                    ctx.isFollowed = JSON.parse(sessionStorage.getItem('subscriptions')).includes(username);

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        menu: './templates/common/menu.hbs',
                        createChirpForm: './templates/common/createChirpForm.hbs',
                        userStats: './templates/common/userStats.hbs',
                        chirp: './templates/common/chirp.hbs',
                        chirpList: './templates/common/chirpList.hbs'
                    }).then(function () {
                        this.partial('./templates/feeds/userFeed.hbs');
                    })
                }).catch(notify.handleError)
        });

        this.post('#/profile/:username', (ctx) => {
            let username = ctx.params.username;

            if(username){
                username = username.substr(1);
            } else {
                username = sessionStorage.getItem('username');
            }

            Promise.all([chirps.loadAllChirpsByUsername(username), user.loadUserFollowers(username), user.loadUserByUsername(username)])
                .then(([chirpsArr, followersArr, user]) => {
                    let chirpsCount = chirpsArr.length;
                    let following = user[0].subscriptions.length;
                    let followers = followersArr.length;

                    chirpsArr.forEach(c => {
                        c.time = calcTime(c._kmd.ect);
                        c.isAuthor = c.author === sessionStorage.getItem('username');
                    });

                    ctx.username = username;
                    ctx.chirpsCount = chirpsCount;
                    ctx.following = following;
                    ctx.followers = followers;
                    ctx.chirps = chirpsArr;
                    ctx.isCurrentlyLogged = ctx.params.username === undefined;
                    ctx.isFollowed = JSON.parse(sessionStorage.getItem('subscriptions')).includes(username);

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        menu: './templates/common/menu.hbs',
                        createChirpForm: './templates/common/createChirpForm.hbs',
                        userStats: './templates/common/userStats.hbs',
                        chirp: './templates/common/chirp.hbs',
                        chirpList: './templates/common/chirpList.hbs'
                    }).then(function () {
                        this.partial('./templates/feeds/userFeed.hbs');
                    })
                }).catch(notify.handleError)
        });

        this.get('#/discover', (ctx) => {
            user.loadAllUsers()
                .then((users) => {
                    users.forEach(user => {
                        user.followers = users.filter(u => u.subscriptions.includes(user.username)).length;
                    });
                    users = users.filter(u => u.username !== sessionStorage.getItem('username'));

                    ctx.users = users.sort((a, b) => b.followers - a.followers);
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        menu: './templates/common/menu.hbs',
                        userBox: './templates/discover/userBox.hbs',
                        userList: './templates/discover/userList.hbs'
                    }).then(function () {
                        this.partial('./templates/discover/discoverPage.hbs');
                    });
                }).catch(notify.handleError);
        });

        this.get('#/follow/:username', (ctx) => {
            let username = ctx.params.username.substr(1);
            let userId = sessionStorage.getItem('userId');
            let newSubArr = JSON.parse(sessionStorage.getItem('subscriptions')).splice(0);
            newSubArr.push(username);

            user.modifyUser(userId, newSubArr)
                .then(() => {
                    notify.showInfo(`Subscribed to ${username}`);
                    sessionStorage.setItem('subscriptions', JSON.stringify(newSubArr));
                    ctx.redirect(`#/feed/:${username}`);
                }).catch(notify.handleError);
        });

        this.get('#/unfollow/:username', (ctx) => {
            let username = ctx.params.username.substr(1);
            let userId = sessionStorage.getItem('userId');
            let newSubArr = JSON.parse(sessionStorage.getItem('subscriptions')).splice(0);
            let indexOfEl = newSubArr.indexOf(username);
            newSubArr.splice(indexOfEl, 1);

            user.modifyUser(userId, newSubArr)
                .then(() => {
                    notify.showInfo(`Unsubscribed to ${username}`);
                    sessionStorage.setItem('subscriptions', JSON.stringify(newSubArr));
                    ctx.redirect(`#/feed/:${username}`);
                }).catch(notify.handleError);
        });

    });

    app.run();
});

function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);

    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}