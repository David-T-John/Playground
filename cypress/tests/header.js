describe('Header', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('is visible', () => {
      cy.get('#header').should('be.visible')

    })
    it('settings menu should open', () => {
      cy.get('#settings-menu-toggle').trigger('click')
      cy.get('#settings-menu-dropdown').should('exist');

    })
})