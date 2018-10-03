describe('Testing cafetownsend site, correctly', function () {

    var login_page = require('../page/logIn_page');
    var employee_page = require('../page/employee_page');

    it('Login test, create employee, edit employee & delete employee', function () {

        // Navigating to site
        login_page.navigateToSite(browser.params.url);
        expect(login_page.logInPageCheck()).toBe(true);

        // Filling the login form
        login_page.fillLogInForm(browser.params.username, browser.params.password);
        login_page.clickSubmitButton();
        browser.sleep(1000);

        // Verify login
        expect(employee_page.employeePageCheck()).toBe(true);

        // Create employee & check if input fields are required
        employee_page.addNewEmployee(browser.params.firstname, browser.params.lastname, browser.params.email);
        employee_page.clickSubmitFormBtn();
        browser.sleep(2000);

        // Check if new employee is created
        expect(employee_page.employeeCheck()).toContain(browser.params.employee);

        // Edit employee
        employee_page.employeeEdit(browser.params.firstnameEdited, browser.params.lastnameEdited, browser.params.emailEdited);
        employee_page.clickSubmitFormBtn();
        browser.sleep(2000);

        // Check edited employee
        expect(employee_page.employeeEditedCheck()).toContain(browser.params.employeeEdited);

        // Delete employee
        employee_page.deleteEmployee();
        browser.sleep(1000);
        browser.switchTo().alert().accept();
        browser.sleep(2000);

        // Check if player is deleted
        employee_page.pageReload();
        browser.sleep(2000);
        expect(employee_page.checkDeletePlayer()).toBe(false);

        // Logout
        employee_page.logOut();
        browser.sleep(1000);
        expect(login_page.logOutCheck()).toBe(true);

    })

    it('Fake test', function () {
        // Fake test. Reporter does not take screenshot of the last test.
        console.log('The test is done!');
    });

})