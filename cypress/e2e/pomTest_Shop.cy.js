import Shop from "../page-objects/shopfun/shop"
describe('Login tests!!!', () => {

  const shop = new Shop();

  beforeEach(() => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("standard_user")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
  })

  
  it('ID = 2AC1 ', () => {
    shop.openProdByName("Sauce Labs Backpack")
    cy.get('[data-test=back-to-products]').should('be.visible')
  })

  it('ID = 2AC2 ', () => {
    shop.openProdBySrc("Sauce Labs Backpack")
    cy.get('[data-test=back-to-products]').should('be.visible')
  })

  it('ID = 2AC3 ', () => {
    cy.scrollTo('bottom')
    cy.get('.inventory_item_name').contains('Test.allTheThings() T-Shirt (Red)').should('be.visible')
  })

  it.only('ID = 2C1C1 ', () => {
    shop.addFromList("Sauce Labs Backpack")
    shop.goToCart()
    shop.inCartV('Sauce Labs Backpack')
  })

  it('ID = 2C1C2 ', () => {
    shop.addFromList("Sauce Labs Backpack")
    shop.addFromList("Sauce Labs Bolt T-Shirt")
    shop.goToCart()
    shop.inCartV('Sauce Labs Backpack')
    shop.inCartV('Sauce Labs Bolt T-Shirt')
  })

  it('ID = 2C1C3 ', () => {
    shop.addFromList("Sauce Labs Bike Light")
    cy.reload()
    shop.addFromList("Sauce Labs Backpack")
    shop.addFromList("Sauce Labs Bolt T-Shirt")
    shop.goToCart()
    shop.inCartV('Sauce Labs Bike Light')
    shop.inCartV('Sauce Labs Backpack')
    shop.inCartV('Sauce Labs Bolt T-Shirt')

  it.only('ID = 2C2C1 ', () => {
        shop.openProdByName("Sauce Labs Backpack")
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        shop.goToCart()
        shop.inCartV("Sauce Labs Backpack")
    })
  })

  it('ID = 2C2C2 ', () => {
    shop.openProdByName('Sauce Labs Backpack')
    shop.addFromPP('Sauce Labs Backpack')
    cy.get('[data-test="back-to-products"]').click()
    shop.openProdByName('Sauce Labs Bike Light')
    shop.addFromPP('Sauce Labs Bike Light')
    cy.get('.shopping_cart_container').click()
    shop.inCartV('Sauce Labs Backpack')
    shop.inCartV('Sauce Labs Bike Light')
  })

  it('ID = 2C2C3 ', () => {
    shop.openProdByName('Sauce Labs Backpack')
    shop.addFromPP('Sauce Labs Backpack')
    cy.get('.bm-burger-button').click()
    cy.get('#inventory_sidebar_link').click().then(() => {
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
    })
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    shop.goToCart()
    shop.inCartV('Sauce Labs Backpack')
    shop.inCartV('Sauce Labs Bike Light')

  })

  it('ID = 2DC1 ', () => {
    shop.addFromList('Sauce Labs Backpack')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
  })

  it('ID = 2DC2 ', () => {
    shop.addFromList('Sauce Labs Backpack')
    cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
  })

  it('ID = 2DC3 ', () => {
    shop.addFromList('Sauce Labs Backpack')
    cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
    shop.goToCart()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
  })

  it('ID = 2EC1 ', () => {
    shop.addFromList('Sauce Labs Backpack')
    shop.goToCart()
        cy.get('.inventory_item_desc').should('be.visible')
        cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
        cy.get('.inventory_details_desc').should('be.visible')
  })

  it('ID = 2EC2 ', () => {
    shop.addFromList('Sauce Labs Backpack')
    shop.addFromList('Sauce Labs Bike Light')
    shop.goToCart()
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
    cy.get('.inventory_details_desc').should('be.visible')
    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name').contains("Sauce Labs Bike Light").click()
    cy.get('.inventory_details_desc').should('be.visible')
  })

  it('ID = 2EC3 ', () => {
    shop.addFromList('Sauce Labs Backpack')
    shop.addFromList('Sauce Labs Bike Light')
    shop.goToCart()
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
    shop.goToCart()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Firstname")
    cy.get('[data-test="postalCode"]').type("37-500")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').contains("Error: Last Name is required").should('be.visible')

  })

  it('ID = 3C1', () => {
    shop.addFromList('Sauce Labs Backpack')
    shop.addFromList('Sauce Labs Bike Light')
    cy.get('#react-burger-menu-btn').click().then(() => {
        cy.get('#reset_sidebar_link').click()
    })
    cy.reload()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')

  })

  it('ID = 3C2', () => {
    shop.addFromList('Sauce Labs Backpack')
    shop.addFromList('Sauce Labs Bike Light')
    cy.get('.inventory_item_name').contains("Sauce Labs Backpack").click()
    cy.get('#react-burger-menu-btn').click().then(() => {
        cy.get('#reset_sidebar_link').click()
    })
    cy.reload()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
  })

  it('ID = 3C3', () => {
    shop.addFromList('Sauce Labs Backpack')
    shop.goToCart()
    cy.get('#react-burger-menu-btn').click().then(() => {
        cy.get('#reset_sidebar_link').click()
    })
    cy.reload()
    cy.get('.inventory_item_name').should('not.exist')
  })
})
