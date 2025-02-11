import LoginPage from '../e2e/pageObjects/LoginPage.js';
import Otppage from './pageObjects/Otppage.js';
describe('Open Energy', () => {
  it('Hi Pages', () => {
    cy.visit("https://hipages-csapp-qa01.cimet.io/open-energy/v2/register");
    cy.fixture('User.json').then((data) => {
       for (let i = 0; i < data.length; i++) {
         const { firstName, lastName, email, phoneNumber } = data[i];
        cy.log(`Testing with Phone: ${phoneNumber}, firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
        LoginPage.enterFirstName(firstName);
        LoginPage.enterLastName(lastName);
        LoginPage.enterEmail(email);
        LoginPage.enterphoneNumber(phoneNumber);
        LoginPage.clickLoginButton();
        Otppage.enterDigit1(5);
        Otppage.enterDigit2(7);
        Otppage.enterDigit3(7);
        Otppage.enterDigit4(5);
        Otppage.clickLoginButton();     
        cy.wait(4000);
        cy.get('[class="sc-6392884d-0 sc-6392884d-1 exNNAT ckOEOs"]').should('exist').click(); 
        cy.get('[class="sc-6392884d-0 sc-6392884d-1 sc-ace91e74-1 exNNAT ckOEOs eKPPXU"]').click();
        cy.origin('https://auth2.fiskil.com/', () => {
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-style-1tn97a7"]').click();
        cy.get('[class="MuiTypography-root MuiTypography-body1 mui-style-192jd74"]').click(); 
          });
          cy.log(`email: ${email}`);
          cy.get('[placeholder="Enter your email"]').type(email);
          cy.get('[class="m-0 p-0 text-sm text-inherit leading-4"]').click();
          
          // cy.get('[class="sc-a0103c4e-0 kmeptV"]').eq(6).should('exist').click()
          // cy.get('[class="sc-6e8c36d4-10 iQA-dXr"]').eq(1).click();
       }
    });
 });
});















