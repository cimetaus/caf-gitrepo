describe('Mocha & Chai Check in Cypress', () => {
    it('should verify that Mocha and Chai are working', () => {
      const expectedValue = 10;
      expect(expectedValue).to.equal(10);  // Chai assertion
    });
  
    it('should check the title of a page', () => {
      cy.visit('https://example.cypress.io');
      cy.title().should('include', 'Cypress');
    });
  });