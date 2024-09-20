describe('checking the functionality of working with photos', () => {
  beforeEach(() => {
    cy.intercept('GET', '/photos', {
      fixture: 'photos.json'
    });
    cy.visit('/');
  });

  it('should render the photos page correctly', () => {
    cy.contains('accusamus');
  });

  it('all photos are successfully uploaded', () => {
    cy.get('[data-testid="PhotoList"]').should('exist');
    cy.get('[data-testid="PhotoItem"]').should('have.length.greaterThan', 15);
  });
});
