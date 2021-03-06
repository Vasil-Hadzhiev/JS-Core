$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                ctx.loggedIn = auth.loggedIn();
                if (ctx.loggedIn) {
                    ctx.username = sessionStorage.username;
                }
                this.partial('./templates/home/home.hbs');
            });
        });

        this.get('#/home', function () {
            this.redirect('#/index.html');
        });

        this.get('#/about', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                ctx.loggedIn = auth.loggedIn();
                if (ctx.loggedIn) {
                    ctx.username = sessionStorage.username;
                }
                this.partial('./templates/about/about.hbs');
            });
        });

        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs',
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    ctx.redirect('#/index.html');
                })
                .catch((error) => {
                    auth.handleError(error);
                });
        });

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs',
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs');
            });
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;

            if (password !== repeatPassword) {
                alert('Passwords do not match!');
            }

            auth.register(username, password, repeatPassword)
                .then((userData) => {
                    ctx.redirect('#/login');
                })
                .catch((error) => {
                    auth.handleError(error);
                });
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    ctx.redirect('#/index.html');
                })
                .catch((error) => {
                    auth.handleError(error);
                });
        });

        this.get('#/catalog', (ctx) => {
            ctx.loggedIn = auth.loggedIn();
            ctx.username = sessionStorage.getItem('username');
            ctx.hasNoTeam = sessionStorage.getItem('teamId');

            teamsService.loadTeams()
                .then(function (teams) {
                    ctx.teams = teams;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        team: './templates/catalog/team.hbs',
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
                });
        });

        this.get('#/catalog/:id', (ctx) => {
            let teamId = ctx.params.id.slice(1);

            teamsService.loadTeamDetails(teamId)
                .then(function (teamData) {
                    ctx.loggedIn = auth.loggedIn();
                    ctx.username = sessionStorage.getItem('username');

                    ctx.teamId = teamData._id;
                    ctx.name = teamData.name;
                    ctx.comment = teamData.comment;
                    ctx.isOnTeam = sessionStorage.getItem('teamId') === teamData._id;
                    ctx.isAuthor = sessionStorage.getItem('userId') === teamData._acl.creator;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamControls: './templates/catalog/teamControls.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/details.hbs');
                    });
                });
        });

        this.get('#/create', (ctx) => {
            ctx.loggedIn = auth.loggedIn();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            });
        });

        this.post('#/create', (ctx) => {
            let teamName = ctx.params.name;
            let description = ctx.params.comment;

            teamsService.createTeam(teamName, description)
                .then(function (teamInfo) {
                    auth.showInfo(`Team ${teamName} created.`);
                    let teamId = teamInfo._id;
                    teamsService.joinTeam(teamId)
                        .then(function (userInfo) {
                            auth.saveSession(userInfo);
                            ctx.redirect('#/catalog');
                        })
                        .catch((error) => {
                            auth.handleError(error)
                        });
                })
                .catch((error) => {
                    auth.handleError(error);
                });
        });

        this.get('#/edit/:id', (ctx) => {
            let teamId = ctx.params.id.slice(1);

            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.loggedIn = auth.loggedIn();
                    ctx.username = sessionStorage.getItem('username');

                    ctx.teamId = teamInfo._id;
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        editForm: './templates/edit/editForm.hbs'
                    }).then(function () {
                        this.partial('./templates/edit/editPage.hbs');
                    });
                });
        });

        this.post('#/edit/:id', (ctx) => {
            let teamId = ctx.params.id.substring(1);
            let teamName = ctx.params.name;
            let description = ctx.params.comment;

            teamsService.edit(teamId, teamName, description)
                .then(function () {
                    auth.showInfo(`Team ${teamName} edited.`);
                    ctx.redirect('#/catalog');
                });
        });

        this.get('#/join/:id', function (ctx) {
            let teamId = ctx.params.id.slice(1);

            teamsService.joinTeam(teamId)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('You have joined the team.');
                    ctx.redirect('#/catalog');
                });

        });

        this.get('#/leave', function (ctx) {
            teamsService.leaveTeam()
                .then(function name(userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('You have left the team.');
                    ctx.redirect('#/catalog');
                });
        });
    });

    app.run();
});