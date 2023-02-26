export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    link_sauceLabsOnesie = 'Sauce Labs Onesie'
    btn_BackpakAddToCart = '#add-to-cart-sauce-labs-backpack'
    btn_OnesieAddToCart = '#add-to-cart-sauce-labs-onesie'
    btn_backToProducts = '#back-to-products'

    //add backpack
    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get(this.btn_BackpakAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }

    //back to product list on dashboard
    clickBackToProducts(){
        cy.get(this.btn_backToProducts).click()
        cy.get('.title').should('be.visible')
        cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')

    }
    //add Onisie
    sauceLabsOnisie(){
        cy.contains(this.link_sauceLabsOnesie).click()
        cy.contains('Sauce Labs Onesie').should('be.visible') 
        cy.get(this.btn_OnesieAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
}