class CommonPage{

    getUserNameField(){
        return cy.get('input[formcontrolname="userName"]').should('be.visible')
    }

    getPasswordField(){
        return cy.get('input[name="password"]').should('be.visible')
    }

    getSigninButton(){
        return cy.get('button.signInBtn');
    }

    getSigninlast(){
        return cy.get(`input[type='submit']`);
    }

    verifyUrl(endPoint){
        cy.url().should('include', endPoint)
    }

    getWelcomeContent(txt){
        return cy.get('li.breadcrumb__list__item.active')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal('Dashboard');
        });
    }

    clickAlert(){
        return cy.get('a[href="/v2/alerts?workspace=sigma-testing"]').first().click({ multiple: true });
        // return cy.contains(span,"Alerts").click()
    }
    
    addAlert(){
        return cy.get("//span[contains(text(),'Add alert')]").click()
    }

}
export default CommonPage;