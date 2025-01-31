/// <reference types="cypress" />
import LoginPage from "../../pageObjects/LoginPage";
import CommonPage from "../../pageObjects/CommonPage";
const loginPage = new LoginPage();
const commonPage = new CommonPage();


describe('Create text alert',() => {
    
    
    beforeEach(() => {
        // Load fixture data before each test
        cy.visit('/signin');
        cy.fixture('example').as('userData');
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
          win.sessionStorage.clear();
        });
      });
    it( 'User should be able to create text alert', function() {

        

         // Retrieve valid user credentials from the fixture
    const { username, password } = this.userData.validUser;

    // Perform login using the LoginPage class
    loginPage.loginWithUI(username, password);

    // Assert successful login (adjust assertion based on your app)
    // cy.url().should('include', '/dashboard');
    commonPage.verifyUrl("/dashboard");
    // cy.visit("/v2/dashboard?workspace=sigma-testing");
    commonPage.clickAlert()
    // commonPage.verifyUrl("/v2/Alerts?workspace=sigma-testing")
    commonPage.addAlert()
    cy.get('input[type="radio"][value="Text Input"]').click();
    cy.get('input[placeholder="Enter alert title"]').should('be.visible').type("Test Alert");
    cy.get('textarea[placeholder="Enter text"]').should('be.visible').type("Test.com");
    cy.contains('span', "Add").click();
    }

    )
}

)