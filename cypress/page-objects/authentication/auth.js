export class Auth {
    loginUser(login, password) {
        this.#getUsername().type(login);
        this.#getPassword().type(password);
        this.#getLoginBtn().click();
    }

    fillUsername(string) {
        this.#getUsername().type(string);
    }

    fillPassword(string) {
        this.#getPassword().type(string);
    }
        
    clickLoginBtn() {
        this.#getLoginBtn().click();
        return this;
    }

    #getUsername() {
        return cy.get('#user-name');
    }

    #getPassword() {
        return cy.get('#password');
    }

    #getLoginBtn() {
        return cy.get('#login-button');
    }
}
export default Auth;