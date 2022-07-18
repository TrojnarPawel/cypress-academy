describe('Login tests!!!', () => {

  it('ID = 1AC1 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("standard_user")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test=product_sort_container]').should('be.visible')
  })

  it('ID = 1AC2 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("standard_user")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
  })

  it('ID = 1AC3 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("standard_user")
    cy.get('[data-test=password').type("secret_sauce3")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
  })

  it('ID = 1BC1 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("locked_out_user")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible')
  })

  it('ID = 1BC2 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("locked_out_user")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
  })

  it('ID = 1BC3 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("locked_out_user")
    cy.get('[data-test=password').type("secret_sauce3")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
  })

  it('ID = 1CC1 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("problem_user")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test=product_sort_container]').should('be.visible')
  })

  it('ID = 1CC2 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("problem_user")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
  })

  it('ID = 1CC3 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("problem_user")
    cy.get('[data-test=password').type("secret_sauce3")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
  })

  it('ID = 1DC1 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("performance_glitch_user")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test=product_sort_container]').should('be.visible')
  })

  it('ID = 1DC2 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("performance_glitch_user")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
  })

  it('ID = 1DC3 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("performance_glitch_user")
    cy.get('[data-test=password').type("secret_sauce3")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
  })

  it('ID = 1EC1 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Username is required").should('be.visible')
  })

  it('ID = 1EC2 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type(" standard_user")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
  })

  it('ID = 1EC3 ', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=username').type("standard_user ")
    cy.get('[data-test=password').type("secret_sauce")
    cy.get('[data-test=login-button').click()
    cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
  })
})

