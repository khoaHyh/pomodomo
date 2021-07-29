describe('Vist localhost:3000/pomodomo.ca', () => {
  beforeEach(function () {
    cy.request('GET', 'http://localhost:8080/testing/reset');
    cy.visit('http://localhost:3000');
  });
  it('will log in', function () {
    cy.contains('Login').click();
    cy.get('input[id*=text]').type('testuser');
    cy.get('#password').type('testpassword1!)');
    cy.get('#login-submit').click();
    cy.wait(200);
    cy.get('#close-modal').click();
    cy.waitFor('#close-modal');
  });

  it('will fail a log in', function () {
    cy.contains('Login').click();
    cy.get('input[id*=text]').type('undefinedUser');
    cy.get('#password').type('testpassword1!)');
    cy.get('#login-submit').click();
    cy.contains('Invalid credentials')
    cy.wait(200);
    cy.get('#close-modal').click();
    cy.waitFor('#close-modal');
  });

});


