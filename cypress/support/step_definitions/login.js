import { Before, defineStep } from 'cypress-cucumber-preprocessor/steps';  
import LoginPage from '../../pageObjects/loginPage';

const login = new LoginPage();

Before({ tags: "@foo" }, function (){
    cy.fixture('credentials').then(function (testdata) {
        this.testdata = testdata
    })  
});

defineStep('the Atlassian Website', function (){
    login.navigate(this.testdata.loginUrl);
})

defineStep('set a username and password', function (){
    login.enterEmail(this.testdata.username);
    login.enterPassword(this.testdata.password);
})

defineStep('click on Login', function (){
    login.submit();
})

defineStep('access to dashboard page', function (){
    cy.url().should('be.equal','https://start.atlassian.com/');
})