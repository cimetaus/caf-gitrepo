const fs = require('fs');
const crypto = require('crypto');
describe ('Energy', () => 
{
it('Dashboard', () => 
 {
    cy.visit('https://dashboard-qa-01.cimet.io/');                                                        // visit the LMS dashboard URL......
    Cypress.on('uncaught:exception', (err, runnable) => 
     {                                                                                                    // For handle the uncaught errors of application......
        return false;
      });
    cy.fixture('token.json').then((data1) => 
   {
      cy.fixture('output.json').then((data2) => 
      {
       for (let i = 0; i < data1.length;i++) 
        {
          const {Email,Password,token,used} = data1[i];
          const{Key1,Key2}=data2;
          cy.get('[name="email"]').type(Email);                                                         // Enter the dashboard login credentials.....
          cy.get('[name="password"]').type(Password);
          cy.get('[name="remember"]').click();
          cy.get('[type="submit"]').click();                                                             // login on the LMS dasboard
          cy.setCookie('val', 'ZmROiv6SBkNu7ee9zmdPScHwJyjy4m3VtpJxjBz0');                               // set the cookies for login
          cy.wait(2000);
          cy.get('[class="link-primary fw-bolder fs-5"]').eq(0).click();                                 // click on click here button for backup code
          cy.wait(2000);
          // cy.get('[class="form-control mb-2 mb-md-0"]').type(token);
          cy.readFile('cypress/fixtures/token.json').then((token) => {
            // Step 2: Find the first unused number
          const unusedtoken = token.find((token) => !token.used);
          if (unusedtoken) {
            cy.log(`Using unique number: ${unusedtoken.token}`);
            cy.get('[class="form-control mb-2 mb-md-0"]').type(unusedtoken.token);
            // Step 3: Mark the number as used
            unusedtoken.used = true;

            // Step 4: Write the updated JSON back to the file
            cy.writeFile('cypress/fixtures/token.json', token);
           } else {
              cy.log('No unused token available.');
             }
           });
          cy.wait(5000);
          cy.get('#backup_submit_button').click();
          cy.wait(3000);
          cy.contains('a','Sales').click({force: true});
          cy.get('[class="btn btn-light-primary filter_leads collapsible collapsed me-3"]').click();     // open the filter for seach the sale
          cy.get('[id="lead_date_id"]').click();                                                         // select the date filter
          cy.contains('li', 'Today').click();
          cy.get('[placeholder="Provider"]').click();                                                   // select the provider filter
          cy.contains('li','Blue NRG').click();
          cy.contains('span','Move-in').click();                                                       // select the Move-in filter
          cy.contains('li','No').click();
          cy.get('[name="email"]').type(Email);    
          cy.get('[id="searchReferenceNumber"]').type(Key1);     
          cy.get('[id="searchReferenceNumber"]').type(',');
          cy.get('[id="searchReferenceNumber"]').type(Key2);
          cy.wait(2000);                                              // enter the email in filter section
          cy.contains('#apply_lead_filters','Apply').click(); 
          cy.wait(8000);                                                
          cy.get('a[target="_blank"]').should('exist')
            .eq(0)
            .invoke('removeAttr', 'target')
            .click({force: true});
          cy.wait(3000);
          cy.contains('a','Customer').click();
          cy.wait(3000);
          cy.get('[class="fw-bolder text-primaryfloat-end edit_sales_btn"]').click();
          cy.wait(3000);
          cy.get('[id="nmi_skip"]').click();
          cy.wait(2000);
          cy.get('[id="mirn_skip"]').click();
          cy.wait(3000)
          cy.get('[id="nmi_number_form_submit_btn"]').click();
          cy.wait(5000);
          cy.contains('a','Status').click();
          cy.get('[title="Change Status"]').eq(0).click();
          cy.contains('li','QA in Progress').click();
          cy.wait(2000);
          cy.get('[class="swal2-confirm swal2-styled"]').click();
          cy.wait(2000);
          cy.get('[id="change_sale_status_form_submit_btn"]').click({force: true});
          cy.wait(3000);
          cy.get('[title="Change Status"]').eq(1).click();
          cy.contains('li','QA in Progress').click();
          cy.wait(3000);
          cy.get('[class="swal2-confirm swal2-styled"]').click();
          cy.wait(3000);
          cy.get('[id="change_sale_status_form_submit_btn"]').click();
          cy.wait(2000);
          cy.get('[title="Change Status"]').eq(0).click();
          cy.contains('li','QA Verified').click();
          cy.wait(2000);
          cy.get('[class="swal2-confirm swal2-styled"]').click();
          cy.wait(3000);
          cy.get('[id="change_sale_status_form_submit_btn"]').click();
          cy.get('[title="Change Status"]').eq(1).click();
          cy.contains('li','QA Verified').click();
          cy.wait(2000);
          cy.get('[class="swal2-confirm swal2-styled"]').click();
          cy.wait(3000);
          cy.get('[id="change_sale_status_form_submit_btn"]').click();
          cy.wait(2000);
          cy.get('[title="Change Status"]').eq(0).click();
          cy.contains('li','Submitted').click();
          cy.wait(2000);
          cy.get('[class="swal2-confirm swal2-styled"]').click();
          cy.wait(3000);
          cy.get('[id="change_sale_status_form_submit_btn"]').click();
          cy.wait(2000);
          cy.get('[title="Change Status"]').eq(1).click();
          cy.contains('li','Submitted').click();
          cy.wait(2000);
          cy.get('[class="swal2-confirm swal2-styled"]').click();
          cy.wait(3000);
          cy.get('[id="change_sale_status_form_submit_btn"]').click();
          cy.contains('a','Providers').click();
          cy.wait(3000);
          cy.get('[data-dt-idx="2"]').click();
          cy.wait(3000);
          cy.get('[class="btn-sm btn-light btn-active-light-primary"]').should('exist')
            .eq(1).click();
          cy.get('a.menu-link.px-3[href="https://dashboard-qa-01.cimet.io/provider/link-provider/dFVzM3I0a0crM0dtV0lSNUlxaW1FQT09"]').click();
          cy.wait(3000);
          cy.contains('a','Sale Submission').click();
          cy.wait(2000);
          cy.get('#sale_submission_type').select('COR');
          cy.wait(5000);
          cy.get('[id="sale_submission_submit_btn"]').click();
          break;
        }
      });
    });
  });
});



