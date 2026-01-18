describe('Login Test', () => {
  it('Login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('You logged into a secure area').should('be.visible')
  })
})
