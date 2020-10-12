describe('Screenshots and button', function () {

    it('1', function () {
        
        cy.visit('https://colors-e9fe4.web.app')
        cy.get('[onclick="randomPalette()"]').click()
        cy.screenshot(`pantallazo1-${Cypress.env('id')}`)
       
    })

    it('2', function () {
        
        cy.visit('https://colors-e9fe4.web.app')
        cy.get('[onclick="randomPalette()"]').click()
        cy.screenshot(`pantallazo2-${Cypress.env('id')}`)
       
    })
})
