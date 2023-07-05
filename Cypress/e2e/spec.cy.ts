// Cypress test
describe('cv testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it('navbar', () => {
    
    cy.contains('About').click();
    cy.contains('Projects').click();
    cy.contains('Contact').click();
    cy.contains('Home').click();
  });

  it('project', () => {
    // Click the link for each project
    cy.get('#projects')
      .find('a[href^="https://kadekdiki.github.io/"]')
      

    // Click the GitHub link for each project
    cy.get('#projects')
      .find('a[href^="https://github.com/"]')
      
  })

  it('contact', () => {
    // Click the link for each project
   cy.get('#name')
      
  })
});