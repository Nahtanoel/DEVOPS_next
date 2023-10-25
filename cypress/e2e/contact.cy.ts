describe('Contact',()=>{
    it('should make a goold fill of form',()=>{
        cy.visit('http://localhost:3000/contact')

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()

        cy.contains("Votre message a bien été envoyé")

    })


    it('should not validate the input because of lastName',()=>{
        cy.visit('http://localhost:3000/contact')

        cy.get('input[name="lastname"]').type('J')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("String must contain at least 2 character(s)")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })

    it('should not validate the input because of firstName',()=>{
        cy.visit('http://localhost:3000/contact')

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('D')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("String must contain at least 2 character(s)")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })

    it('should not validate the input because of email',()=>{
        cy.visit('http://localhost:3000/contact')

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('jo')
        cy.get('textarea[name="msg"]').type('this is a message')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("Invalid email")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })

    it('should not validate the input because of message',()=>{
        cy.visit('http://localhost:3000/contact')

        cy.get('input[name="lastname"]').type('John')
        cy.get('input[name="firstname"]').type('Doe')
        cy.get('input[name="email"]').type('johnDoe@gmail.com')
        cy.get('textarea[name="msg"]').type('t')


        cy.get('button[type="submit"]').click()
        cy.get('span').contains("String must contain at least 2 character(s)")
        cy.should('not.contain', 'Votre message a bien été envoyé')

    })


})