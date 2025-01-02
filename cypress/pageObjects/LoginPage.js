import CommonPage from "./CommonPage";


class LoginPage {

  loginWithUI(userId,password) {

    const commonPage = new CommonPage();
    cy.visit("/SignIn");

    commonPage.getUserNameField().type(userId);
    commonPage.getSigninButton().click();
    commonPage.getPasswordField().clear().type(password);
    commonPage.getSigninlast().click();
  }
}
export default LoginPage;
