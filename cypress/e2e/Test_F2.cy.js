describe('Time for shopping!!!', () => {

    beforeEach(() => {
        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
        cy.get('[data-test=username').type("standard_user")
        cy.get('[data-test=password').type("secret_sauce")
        cy.get('[data-test=login-button').click()
        cy.getCookies().should('have.length', 1).then((cookies) => {
            expect(cookies[0]).to.have.property("name", "session-username")
        })
    })

    function dodanieProduktu(test) {
        cy.get(`.inventory_item`).contains(test).parents('.inventory_item_description').find('button').click()
    }
    
    it('ID = 2AC1 ', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
        cy.get('[data-test=back-to-products]').should('be.visible')
    })

    it('ID = 2AC2 ', () => {
        cy.get('.inventory_item_img').first().click()
        cy.get('[data-test=back-to-products]').should('be.visible')
    })


    it('ID = 2AC3 ', () => {
        cy.scrollTo('bottom')
        cy.get('.inventory_item_name').contains('Test.allTheThings() T-Shirt (Red)').should('be.visible')
    })

    it('ID = 2C1C1 ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_container').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
    })

    it('ID = 2C1C2 ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_container').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    })

    it('ID = 2C1C3 ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.reload()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_container').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').should('be.visible')
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt').should('be.visible')

    it('ID = 2C2C1 ', () => {
            cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_container').click()
            cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
        })

    })

    it('ID = 2C2C2 ', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_container').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').should('be.visible')
    })

    it('ID = 2C2C3 ', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.bm-burger-button').click()
        cy.get('#inventory_sidebar_link').click().then(() => {
            cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
        })
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_container').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').should('be.visible')

    })

    it('ID = 2DC1 ', () => {
        dodanieProduktu('Sauce Labs Backpack')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
    })

    it('ID = 2DC2 ', () => {
        dodanieProduktu('Sauce Labs Backpack')
        cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
    })

    it('ID = 2DC3 ', () => {
        dodanieProduktu('Sauce Labs Backpack')
        cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
    })

    it('ID = 2EC1 ', () => {
        dodanieProduktu('Sauce Labs Backpack')
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_desc').should('be.visible')
            cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
            cy.get('.inventory_details_desc').should('be.visible')
    })

    it('ID = 2EC2 ', () => {
            dodanieProduktu('Sauce Labs Backpack')
            dodanieProduktu('Sauce Labs Bike Light')
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_desc').should('be.visible')
            cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
            cy.get('.inventory_details_desc').should('be.visible')
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_name').contains("Sauce Labs Bike Light").click()
            cy.get('.inventory_details_desc').should('be.visible')
    })

    it('ID = 2EC3 ', () => {
            dodanieProduktu('Sauce Labs Backpack')
            dodanieProduktu('Sauce Labs Bike Light')
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_desc').should('be.visible')
            cy.get('[data-test="checkout"]').click()
            cy.go('back')
            cy.get('.inventory_item_desc').should('be.visible')
    })
    
    it('ID = 2FC1 ', () => {
            cy.get('.shopping_cart_link').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type("Firstname")
            cy.get('[data-test="lastName"]').type("Lastname")
            cy.get('[data-test="postalCode"]').type("37-500")
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="finish"]').click()
            cy.get('.pony_express').should('be.visible')
    })

    it('ID = 2FC2 ', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Firstname")
        cy.get('[data-test="lastName"]').type("Lastname")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').contains("Error: Postal Code is required").should('be.visible')
    
    })

    it('ID = 2FC3 ', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Firstname")
        cy.get('[data-test="postalCode"]').type("37-500")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').contains("Error: Last Name is required").should('be.visible')
    
    })

    it('ID = 3C1', () => {
        dodanieProduktu('Sauce Labs Backpack')
        dodanieProduktu('Sauce Labs Bike Light')
        cy.get('#react-burger-menu-btn').click().then(() => {
            cy.get('#reset_sidebar_link').click()
        })
        cy.reload()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')

    })

    it('ID = 3C2', () => {
        dodanieProduktu('Sauce Labs Backpack')
        dodanieProduktu('Sauce Labs Bike Light')
        cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
        cy.get('#react-burger-menu-btn').click().then(() => {
            cy.get('#reset_sidebar_link').click()
        })
        cy.reload()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
    })

    it('ID = 3C3', () => {
        dodanieProduktu('Sauce Labs Backpack')
        cy.get('.shopping_cart_link').click() 
        cy.get('#react-burger-menu-btn').click().then(() => {
            cy.get('#reset_sidebar_link').click()
        })
        cy.reload()
        cy.get('.inventory_item_name').should('not.exist')
    })
})