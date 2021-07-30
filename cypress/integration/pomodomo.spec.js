beforeEach(function () {
  cy.visit('http://localhost:3000');
});
describe('Vist localhost:3000/pomodomo.ca', function () {
  before(function () {
    cy.request('GET', 'http://localhost:8080/testing/reset');
    cy.visit('http://localhost:3000');
  });
  it('will log in with correct crentials', function () {
    // cy.intercept('POST', '/login', { statusCode: 200 }).as('login-success');
    // cy.intercept('GET', '/profile', { statusCode: 200 }).as('profile');
    cy.contains('Login').click();
    cy.get('input[id*=text]').type('testuser');
    cy.get('#password').type('testpassword1!)');
    cy.get('#login-submit').click();
    cy.wait(200);
    cy.get('#close-modal').click();
    cy.contains('testuser').should(() => {
      expect(JSON.parse(localStorage.getItem('userData'))).to.have.keys(
        'hours_focused',
        'pomodoros_completed',
        'days_logged'
      );
    });
  });

  it('Entering wrong credentials will fail the login', function () {
    cy.intercept('POST', '/login', { statusCode: 401 }).as('login-fail');
    cy.contains('Login').click();
    cy.get('input[id*=text]').type('undefinedUser');
    cy.get('#password').type('testpassword1!)');
    cy.get('#login-submit').click();
    cy.wait('@login-fail');
    cy.get('#close-modal').click();
    cy.waitFor('#close-modal');
  });
});

// describe('Vist localhost:3000/pomodomo.ca', function () {
//   beforeEach(function () {
//     cy.visit('http://localhost:3000');
//   });

// });

describe.only('Vist localhost:3000/pomodomo.ca', function () {
  beforeEach(function () {
    cy.request('GET', 'http://localhost:8080/testing/reset');
    cy.visit('http://localhost:3000');
  });
  it('should register a new user', function () {
    // cy.intercept('/register', (req, res) => {
    //   expect(res.body.message).to.be.not.undefined();
    // });
    cy.contains('Login').click();
    cy.contains('Register').click();
    cy.get('#reg-userName').type('newTestUser');
    cy.get('#reg-email').type('simpleEmail@mail.com');
    cy.get('#reg-password').type('Testpassword1!)');
    cy.get('#reg-submit').click();
  });
});
