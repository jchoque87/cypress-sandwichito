class LoginPage {

    navigate(url) {
        cy.visit(url)
        cy.wait(1000)      
    }        

    enterEmail(username) {
        cy.get('input[id="username"]').clear();
        cy.get('input[id="username"]').type(username).type("{Enter}");
        return this
    }   
    
    enterPassword(password) {
        cy.get('input[id="password"]').clear();
        cy.get('input[id="password"]').type(password);
        return this
    }  

    submit() {
        cy.get('button[id="login-submit"]').click();
    }
  }
  
  export default LoginPage;