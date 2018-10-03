require('../page/employee_page');

var logIn_page = function () {

    // Elements
    
    var usernameField = element(by.model('user.name'));
    var passwordField = element(by.model('user.password'));
    var submitButton = element(by.css('button.main-button'));
    var errorMsgText = element(by.css('p.error-message'));
    
    // Functions - test actions
    
    this.navigateToSite = function (url) {
        browser.get(url);
    }

    // Check if login is successfully
    this.logInPageCheck = function () {
        return submitButton.isDisplayed();
    }

    this.fillLogInForm = function (username, password) {
        usernameField.sendKeys(username);
        passwordField.sendKeys(password);
    }

    this.clickSubmitButton = function () {
        submitButton.click();
        return require('./employee_page');
    }

    // Catch error message for false login test
    this.getErrorMsg = function () {
        return errorMsgText.getText();
    }

    this.logOutCheck = function () {
        return usernameField.isDisplayed();
    }

}
module.exports = new logIn_page();