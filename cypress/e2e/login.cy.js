describe('Testing Valid Login credentials for parent role', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[name=username]').type('Parent');

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${'password1'}{enter}`, {
      log: false,
    });

    cy.url().should('include', '/account');

    // check for token
    cy.window()
      .its('sessionStorage')
      .invoke('getItem', 'accessToken')
      .should('exist');
  });
});

describe('Testing Invalid Login credentials', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[name=username]').type('Parent');

    cy.get('input[name=password]').type(`${'wrongpassword'}{enter}`, {
      log: false,
    });

    // see error message
    cy.get('[data-test-id="errorMessage"]');
  });
});
