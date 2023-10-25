describe('Navigation',()=>{
    it('should navigate to the contact page',()=>{
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="contact"]').click()

        cy.url().should('include','/contact')

        cy.get('h1').contains('Contact form')
    })

})