import { defineStep } from 'cypress-cucumber-preprocessor/steps';  
import LoginPage from '../../pageObjects/loginPage';

const login = new LoginPage();
        
defineStep('the Atlassian Website',()=>{
    login.navigate(Cypress.env("url"));
})

defineStep('set a username and password',()=>{
    login.enterEmail(Cypress.env("username"));
    login.enterPassword(Cypress.env("password"));
})

defineStep('click on Login',()=>{
    login.submit();
})

defineStep('access to dashboard page',()=>{
    cy.wait(3000)
    cy.contains('testdesign001').click()        
})