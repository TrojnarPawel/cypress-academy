export class Shop {

    openProdByName(string) {
        return cy.get(`.inventory_item_name`).contains(string).click()
    }

    openProdBySrc(string) {
        return cy.get('.inventory_item_img').parent('.inventory_item').contains(string).click()
    }

    addFromList(string) {
        return cy.get(`.inventory_item`).contains(string).parents('.inventory_item_description').find('button').click()
    }

    addFromPP(string) {
        return cy.get(`.inventory_item`).contains(string).parents('.inventory_item_description').find('button').click()
    }

    backToList() {
        return cy.get('.back-to-products').find('button').click()
    }

    isItPp() {
         return cy.get('[data-test=back-to-products]').should('be.visible')
    }

    removeFromList() {

    }

    removeFromCart() {

    }

    removeFromPP() {

    }

    goDown() {
        return cy.scrollTo('bottom')
    }

    goToCart() {
        cy.get('.shopping_cart_container').click()
    }

    inCartV(string) {
        cy.get('.inventory_item_name').contains(string).should('be.visible')
    }

}
export default Shop;