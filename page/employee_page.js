var employee_page = function () {

    // Elements

    var createEmployeeButton = element(by.id('bAdd'));
    var editEmployeeButton = element(by.id('bEdit'));
    var deleteEmployeeButton = element(by.id('bDelete'));
    var logOutButton = element(by.xpath('/html/body/div/header/div/p[1]'));
    var cancelCreateEmployee = element(by.css('a.subButton.bCancel'));

    var firstnameField = element(by.model('selectedEmployee.firstName'));
    var lastnameField = element(by.model('selectedEmployee.lastName'));
    var startdateField = element(by.model('selectedEmployee.startDate'));
    var emailField = element(by.model('selectedEmployee.email'));

    var submitFormBtn = element(by.css('button[type=submit]:not(.ng-hide)'));

    // Catching employee like this, because there is no search option
    var employeeSearch = element(by.cssContainingText('li.ng-scope', 'Nick Pan'));
    var employeeSearchEdited = element(by.cssContainingText('li.ng-scope', 'Nicko Pana'));

    // Get date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    // If date and month are less than 10 add leading zero '0'
    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    // Date formatting
    today = yyyy + '-' + mm + '-' + dd;

    // Functions - test actions

    // Check if browser is on correct page
    this.employeePageCheck = function () {
        return createEmployeeButton.isDisplayed();
    }

    this.addNewEmployee = function (name, lastname, email) {
        createEmployeeButton.click();
        // Check if all input fields has required attribute
        expect(firstnameField.getAttribute('required')).toBe('true');
        expect(lastnameField.getAttribute('required')).toBe('true');
        expect(startdateField.getAttribute('required')).toBe('true');
        expect(emailField.getAttribute('required')).toBe('true');
        // Send values to input fields
        firstnameField.sendKeys(name);
        lastnameField.sendKeys(lastname);
        startdateField.sendKeys(today);
        emailField.sendKeys(email);
    }

    // Check if new employee is created
    this.employeeCheck = function () {
        return employeeSearch.getText();
    }

    this.employeeEdit = function (firstnameEdited, lastnameEdited, emailEdited) {
        // Finding employee by full name
        employeeSearch.click();
        editEmployeeButton.click();
        // Clear and send new values to input fields
        firstnameField.clear().sendKeys(firstnameEdited);
        lastnameField.clear().sendKeys(lastnameEdited);
        startdateField.clear().sendKeys(today);
        emailField.clear().sendKeys(emailEdited)
    }

    // Check if employee is edited
    this.employeeEditedCheck = function () {
        return employeeSearchEdited.getText();
    }

    this.clickSubmitFormBtn = function () {
        submitFormBtn.click();
    }

    this.deleteEmployee = function () {
        employeeSearchEdited.click();
        deleteEmployeeButton.click();
    }

    // Reloading page this way, because with regular page reload app will logout
    this.pageReload = function () {
        createEmployeeButton.click();
        cancelCreateEmployee.click();
    }

    this.checkDeletePlayer = function () {
        return employeeSearchEdited.isPresent();
    }

    this.logOut = function () {
        logOutButton.click();
    }

}
module.exports = new employee_page();