function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let passwordConfirm = $('#confirm-password');
    let companyNumber = $('#companyNumber');
    let checkbox = $('#company');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');

    checkbox.on('change', function () {
        if ($(this).is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let emailRegex = /^(.+@.*\..*)$/;
    let passwordRegex = /^\w{5,15}$/;

    submitBtn.on('click', function () {
        let usernameVal = username.val();
        let emailVal = email.val();
        let passwordVal = password.val();
        let passwordConfirmVal = passwordConfirm.val();
        let isValid = true;

        if (usernameRegex.test(usernameVal)){
            username.css('border-color', '');
        } else {
            username.css('border-color', 'red');
            isValid = false;
        }

        if (emailRegex.test(emailVal)){
            email.css('border-color', '');
        } else {
            email.css('border-color', 'red');
            isValid = false;
        }

        if (passwordRegex.test(passwordVal)){
            password.css('border-color', '');
        } else {
            password.css('border-color', 'red');
            isValid = false;
        }

        if (passwordRegex.test(passwordConfirmVal)){
            passwordConfirm.css('border-color', '');
        } else {
            passwordConfirm.css('border-color', 'red');
            isValid = false;
        }

        if(passwordVal !== passwordConfirmVal){
            password.css('border-color', 'red');
            passwordConfirm.css('border-color', 'red');
            isValid = false;
        }

        if (companyInfo.css('display') === 'block') {
            let number = Number(companyNumber.val());

            if (number >= 1000 && number <= 9999) {
                companyNumber.css('border-color', '');
            } else {
                companyNumber.css('border-color', 'red');
                isValid = false;
            }
        }

        if (isValid) {
            validDiv.css('display', 'block');
        } else {
            validDiv.css('display', 'none');
        }
    })
}