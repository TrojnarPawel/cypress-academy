import Auth from "../page-objects/authentication/auth"
describe('Login tests!!!', () => {

  const auth = new Auth();

  function czyPrzeszlo() {
    cy.get('[data-test=product_sort_container]').should('be.visible')
      cy.getCookies().should('have.length', 1).then((cookies) => {
      expect(cookies[0]).to.have.property("name", "session-username")
      })}

  beforeEach(() => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
  })
  
    it('ID = 1AC1 ', () => {
      auth.fillUsername("standard_user")
      auth.fillPassword("secret_sauce")
      auth.clickLoginBtn()
      czyPrzeszlo()
    })

    it('ID = 1AC2 ', () => {
      auth.fillUsername("standard_user")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
    })
  
    it('ID = 1AC3 ', () => {
      auth.fillUsername("standard_user")
      auth.fillPassword("secret_sauce3")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    })
  
    it('ID = 1BC1 ', () => {
      auth.fillUsername("locked_out_user")
      auth.fillPassword("secret_sauce")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible')
    })
  
    it('ID = 1BC2 ', () => {
      auth.fillUsername("locked_out_user")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
    })
  
    it('ID = 1BC3 ', () => {
      auth.fillUsername("locked_out_user")
      auth.fillPassword("secret_sauce3")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    })
  
    it('ID = 1CC1 ', () => {
      auth.fillUsername("problem_user")
      auth.fillPassword("secret_sauce")
      auth.clickLoginBtn()
      czyPrzeszlo()
    })
  
    it('ID = 1CC2 ', () => {
      auth.fillUsername("standard_user")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
    })
  
    it('ID = 1CC3 ', () => {
      auth.fillUsername("standard_user")
      auth.fillPassword("secret_sauce3")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    })
  
    it('ID = 1DC1 ', () => {
      auth.fillUsername("performance_glitch_user")
      auth.fillPassword("secret_sauce")
      auth.clickLoginBtn()
      czyPrzeszlo()
    })
    
    it('ID = 1DC2 ', () => {
      auth.fillUsername("performance_glitch_user")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Password is required").should('be.visible')
    })
  
    it('ID = 1DC3 ', () => {
      auth.fillUsername("performance_glitch_user")
      auth.fillPassword("secret_sauce3")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    })

    it('ID = 1EC1 ', () => {
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Username is required").should('be.visible')
    })
  
    it('ID = 1EC2 ', () => {
      auth.fillUsername(" standard_user")
      auth.fillPassword("secret_sauce")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    })
  
    it('ID = 1EC3 ', () => {
      auth.fillUsername("standard_user ")
      auth.fillPassword("secret_sauce")
      auth.clickLoginBtn()
      cy.get('[data-test="error"]').contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    })
  })