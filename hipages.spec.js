describe('Open Energy', () => {
    it('Hi Pages', () => {
      cy.visit("https://hipages-csapp-qa01.cimet.io/open-energy/v2/register");
      cy.fixture('User.json').then((data) => {
         for (let i = 0; i < data.length; i++) {
           const { firstName, lastName, email, phoneNumber } = data[i];
          cy.log(`Testing with Phone: ${phoneNumber}, firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
          cy.get('[name="firstName"]').type(firstName);
          cy.get('[name="lastName"]').type(lastName);
          cy.get('[name="email"]').type(email);
          cy.get('[name="phoneNumber"]').type(phoneNumber);
          cy.get('[type="submit"]').click();
          cy.wait(4000);
          cy.get('[aria-label="Please enter verification code. Digit 1"]').type('5');
          cy.get('[aria-label="Digit 2"]').type('7');
          cy.get('[aria-label="Digit 3"]').type('7');
          cy.get('[aria-label="Digit 4"]').type('5');
          cy.get('[type="submit"]').click();
          cy.wait(4000);
          cy.contains('button', 'Let’s start now').click();
          cy.contains('button', 'Proceed to CDR consent').click(); 
          cy.origin('https://auth2.fiskil.com/?sess_id=2rvkvrh9DKFFjq5cc6MM9I2o15r/', () => {
            cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-style-1tn97a7"]').click();
            cy.get('[class="MuiTypography-root MuiTypography-body1 mui-style-192jd74"]').click(); 
          });
          cy.log(`email: ${email}`);
          cy.wait(2000);
          cy.get('[placeholder="Enter your email"]').type(email);
          cy.get('[class="m-0 p-0 text-sm text-inherit leading-4"]').click();
            //   cy.get('[class="m-0 p-0 text-sm text-inherit leading-4"]').eq(1).click();  
          cy.get('a[target="_blank"]')
            .should('have.attr', 'href')
                .then((url) => {
              cy.visit('https://yopmail.com/');
              cy.get('[name="login"]').type('apoorva.joshi.cimet');
              cy.get('[class="material-icons-outlined f36"]').click();
              cy.get('table tbody:nth-child(1) tr:nth-child(2) td:nth-child(0) p').invoke('text').as('copiedText');
              cy.get('@copiedText').then((text) => {
              cy.log(text);
              expect(text.trim()).to.eq('Expected Text');
             });
            });    
            cy.get('a[target="_blank"]')
            .should('have.attr', 'href')
            .then((url) => {
            cy.visit('https://auth.sandbox.cdr.dataholder.fiskil.com/verify-otp/?email=apoorva.joshi.cimet%40yopmail.com');
               
            });
            // cy.get('[class="sc-a0103c4e-0 kmeptV"]').eq(6).should('exist').click()
            // cy.get('[class="sc-6e8c36d4-10 iQA-dXr"]').eq(1).click();
         }
      });
   });
});
