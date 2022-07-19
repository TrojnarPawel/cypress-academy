describe('Time for shopping!!!', () => {

    beforeEach(() => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
        cy.get('[data-test=username').type("standard_user")
        cy.get('[data-test=password').type("secret_sauce")
        cy.get('[data-test=login-button').click()
        cy.getCookies().should('have.length', 1).then((cookies) => {
            expect(cookies[0]).to.have.property("name", "session-username");
        })
    })

    it('ID = 4AC1', () => {
        cy.get('#react-burger-menu-btn').click().then(() => {
            cy.get('#logout_sidebar_link').click()
        })
        cy.get('#login-button').should('be.visible')
    })
    

    it('ID = 4AC2', () => {
        cy.get('#react-burger-menu-btn').click().then(() => {
            cy.get('#about_sidebar_link').click()
        })
        cy.getCookies().should('have.length', 1).then((cookies) => {
                expect(cookies.name, 'SID')
        })
    })
    

    it('ID = 4AC3', () => {
        cy.get('.shopping_cart_container').click()
        cy.get('#react-burger-menu-btn').click().then(() => {
            cy.get('#inventory_sidebar_link').click()
        })
        cy.get('.peek').should('be.visible')
    })

    it('ID = 4BC1', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('.peek').should('be.visible')
    })


    it('ID = 4BC2', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('.peek').should('be.visible')
    })

    it('ID = 4BC3', () => {

        for(var i=0; i<4; i++){
            cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            cy.get('[data-test="back-to-products"]').click()
            cy.get('.peek').should('be.visible')
        }
    })

    it('ID = 4CC1', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('#continue-shopping').should('be.visible')
    })


    it('ID = 4CC2', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#continue-shopping').should('be.visible')
    })
    

    it('ID = 4CC3', () => {
        for(var i=0; i < 3; i++) {
            cy.get('.shopping_cart_link').click()
            cy.get('#continue-shopping').click()
        }
        cy.get('.shopping_cart_link').click()
        cy.get('#continue-shopping').should('be.visible')
    })
    

    it('ID = 4DC1', () => {
        cy.get('.social_twitter').children().should('have.attr', 'href', 'https://twitter.com/saucelabs')
    })
    
    it('ID = 4DC2', () => {
        cy.get('.social_facebook').children().should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
    })

    it('ID = 4DC3', () => {
        cy.get('.social_linkedin').children().should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
    })

})