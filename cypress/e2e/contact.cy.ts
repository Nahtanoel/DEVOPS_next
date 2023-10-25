// Test concernant la page contact
describe('Contact',()=>{

    beforeEach(() =>{
        cy.visit('http://localhost:3000/contact')
    })

    it('should make a goold fill of form',()=>{
         

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()

        cy.contains("Votre message a bien été envoyé")

    })


    it('should not validate the input because of lastName',()=>{

        cy.get('input[name="lastname"]').type('J')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("String must contain at least 2 character(s)")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })

    it('should not validate the input because of firstName',()=>{

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('D')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("String must contain at least 2 character(s)")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })

    it('should not validate the input because of email',()=>{

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('jo')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("Invalid email")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })

    it('should not validate the input because of message',()=>{

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('t')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("String must contain at least 2 character(s)")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })


})