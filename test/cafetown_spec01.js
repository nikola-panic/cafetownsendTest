describe('Testing cafetownsend site, bad login', function () {

    var login_page = require('../page/logIn_page');

    it('False login test', function () {

        // Navigating to site
        login_page.navigateToSite(browser.params.url);
        expect(login_page.logInPageCheck()).toBe(true);

        // Filling the form wrongly
        login_page.fillLogInForm(browser.params.falseusername, browser.params.falsepassword);
        login_page.clickSubmitButton();

        // Expecting to get error message
        expect(login_page.getErrorMsg()).toEqual(browser.params.errorMsgText);
    })

})