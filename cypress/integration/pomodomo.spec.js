describe('Logging in', function () {
  before(function () {
    cy.request('GET', 'http://localhost:8080/testing/reset');
    cy.visit('http://localhost:3000');
  });
  it('with wrong credentials will fail the login', function () {
    cy.intercept('/login').as('login-fail');
    cy.contains('Login').click();
    cy.get('input[id*=text]').type('undefinedUser');
    cy.get('#password').type('testpassword1!)');
    cy.get('#login-submit').click();
    cy.wait('@login-fail');
    cy.contains('Invalid');
    cy.get('#close-modal').click();
  });
  it(' with correct crentials', function () {
    cy.intercept('/login').as('login-success');
    cy.contains('Login').click();
    cy.get('input[id*=text]').type('testuser');
    cy.get('#password').type('testpassword1!)');
    cy.get('#login-submit').click();
    cy.wait('@login-success');
    cy.getCookie('express.sid').should('have.property', 'expiry');
    cy.get('#close-modal')
      .click()
      .then(() => {
        expect(JSON.parse(localStorage.getItem('userData'))).to.have.keys(
          'hours_focused',
          'pomodoros_completed',
          'days_logged'
        );
      });
  });
  it('after a successful login, users can access their profile', function () {
    cy.contains('testuser').click().siblings().should('contain','Hours Focused: 0.00')
  });
});

describe('Vist localhost:3000/pomodomo.ca', function () {
  before(function () {
    cy.request('GET', 'http://localhost:8080/testing/reset');
    cy.visit('http://localhost:3000');
  });
  it('should fail to register a new user from bad password and user', function () {
    cy.contains('Login').click();
    cy.contains('Register').click();
    cy.get('#reg-email').type('simpleEmail@mail.com');
    cy.get('#reg-password').type('badpassword');
    cy.get('#reg-submit').click();
    cy.get('#message-list').children().should('not.be.undefined');
    cy.get('#reg-userName').clear();
    cy.get('#reg-email').clear();
    cy.get('#reg-password').clear();
  });
  it('should register a new user', function () {
    cy.intercept('/register').as('register');
    cy.get('#reg-userName').type('newTestUser');
    cy.get('#reg-email').type('simpleEmail@mail.com');
    cy.get('#reg-password').type('Testpassword1!)');
    cy.get('#reg-submit').click();
    cy.wait('@register');
    cy.contains('Check for verification');
  });
});
