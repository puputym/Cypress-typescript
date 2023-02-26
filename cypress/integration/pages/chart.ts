export class ChartPage{
    //ambil element locator from inspect elemnt id
    btn_sauceLabsCart = '#shopping_cart_container'
    btn_removeBackpack = '#remove-sauce-labs-backpack'
    btn_removeOnisie = '#remove-sauce-labs-onesie'

    clickCart(){
        cy.get(this.btn_sauceLabsCart).click()
        cy.contains('Your Cart').should('contain','Your Cart')
    }
 
    assertBacpackAndOnesie(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.contains('Sauce Labs Onesie').should('be.visible') 
    }
  
    removeBackpack(){
        cy.get(this.btn_removeBackpack).click()
        cy.contains('Sauce Labs Backpack').should('not.exist');
    }
    removeOnisie(){
        cy.get(this.btn_removeOnisie).click()
        cy.contains('Sauce Labs Onesie').should('not.exist');
    }
    removeBackpakandOnisie(){
        this.removeBackpack()
        this.removeOnisie()
    }

}