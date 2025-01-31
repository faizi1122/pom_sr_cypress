// /// <reference types="cypress" />
// import LoginPage from "../../pageObjects/LoginPage";
// import example from "../../fixtures/example";

// const loginPage = new LoginPage();

// describe('Navigate to Login Page', () => {
//   it('should navigate to the specs page successfully', () => {
//     // Visit the /__/#/specs route
//     cy.visit('/signin');

//     // Assert that the page loads by checking for a unique element on the specs page
//     cy.contains('button', 'Sign in').should('exist');
//     loginPage.loginWithUI("faizan.iqbal@technogenics.io","p@ssword4SReady")
    
//   });
// });


///Test
/// <reference types="cypress" />
import LoginPage from "../../pageObjects/LoginPage";
import CommonPage from "../../pageObjects/CommonPage";
const loginPage = new LoginPage();
const commonPage = new CommonPage();

describe('Login Functionality', () => {
  beforeEach(() => {
    // Load fixture data before each test
    cy.visit('https://test-alpha.strikeready.app/signin');
    cy.fixture('example').as('userData');
  });

  it('should log in successfully with valid credentials', function () {
    // Retrieve valid user credentials from the fixture
    const { username, password } = this.userData.validUser;

    // Perform login using the LoginPage class
    loginPage.loginWithUI(username, password);

    // Assert successful login (adjust assertion based on your app)
    // cy.url().should('include', '/dashboard');
    // commonPage.verifyUrl("/dashboard");
  });

  it('should fail to log in with invalid credentials', function () {
    // Retrieve invalid user credentials from the fixture
    const { username, password } = this.userData.invalidUser;

    // Perform login using the LoginPage class
    loginPage.loginWithUI(username, password);

    // Assert login failure (adjust assertion based on your app)
    cy.contains('Unable to sign in').should('be.visible');
  });
});


// describe('Login Functionality', () => {
//   beforeEach(() => {
//     // Load fixture data before each test
//     cy.fixture('example').as('userData');
//   });

//   it('should log in successfully with valid credentials', function () {
//     // Retrieve valid user credentials from the fixture
//     const { username, password } = this.userData.validUser;

//     // Perform login using the custom command
//     cy.loginWithUI(username, password);

//     // Assert successful login
//     cy.url().should('include', '/dashboard');
//   });

//   it('should fail to log in with invalid credentials', function () {
//     // Retrieve invalid user credentials from the fixture
//     const { username, password } = this.userData.invalidUser;

//     // Perform login using the custom command
//     cy.loginWithUI(username, password);

//     // Assert login failure
//     cy.contains('Unable to sign in').should('be.visible');
//   });
// });