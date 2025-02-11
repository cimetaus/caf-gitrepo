describe ('Energy', () => {
   it('BLU_NRG Sale', () => {
      cy.visit('https://csapp-qa01.cimet.io/energy');
      cy.clearCookies();
      cy.wait(3000);
      cy.get('[list="found-addresses"]').type('2000');                                                                // type the 2000 postcode for search address
      cy.get('[class="sc-d3ed53d6-6 cpowap"]').eq(4).click();                                                         // select the address after search the address
      cy.get('[type="button"]').click();
      cy.wait(2000);
      cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(2).click();                                                         // select the answer for the question with journey
      cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(4).click();
      cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(6).click();
      cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(8).click();
      cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(10).click();
      cy.get('[type="checkbox"]').click();
      cy.wait(2000);
      cy.get('[class="sc-7f67791e-0 sc-7f67791e-1 khdfpI gqzmtj"]').click();                                           // click on submit after selecting all the answer the question
      cy.wait(5000);
      cy.get('[name="name"]').type('Apoorva Joshi');                 // Entering personal details on the popup
      cy.get('[name="email"]').type('apoorva.joshi@cimet.com.au');
      cy.get('[name="phone"]').type('0420580919');
      cy.get('[type="submit"]').click();
      cy.wait(150000);
      cy.get('[data-cimet-id="close-icon-container"]').click();
      cy.get('[data-cimet-id="0-not-post-sale-btn"]').click();     
      cy.wait(10000);
      cy.contains('Miss').click();
      cy.get('[name="dateOfBirth"]').type('11/04/1996');
      cy.get('[data-cimet-id="business-details-header-wrapper"]').click();
      cy.wait(5000);
      cy.get('[class="default-select__input"]').type('CIMET').click();
      cy.wait(5000);
      cy.get('#react-select-2-option-1').click();
      cy.get('[name="position"]').type('Business');
      cy.contains('Yes').click();
      cy.contains('Drivers Licence').click();
      cy.contains('ACT').click();
      cy.get('[data-cimet-id="primarylicencenumber-base-input"]').type('12345678');                                                       // Enetering driving licence details through journey
      cy.get('[data-cimet-id="primarylicencecardnumber-base-input"]').type('123456');
      cy.get('[name="primary.licence_expiry_date"]').type('12/05/2025');
      cy.get('[data-cimet-id="australian-passport-1-option"]').click();                                                                       // entering passport details through journey
      cy.get('[data-cimet-id="secondarypassportnumber-base-input"]').type('12345678900');
      cy.get('[name="secondary.passport_expiry_date"]').type('12/07/2026');
      cy.contains('Medical Information').click();                                                                        // selection answer related to medical information
      cy.get('[class="sc-33e5c7d-2 jlUflY"]').eq(17).click();
      cy.get('[class="sc-33e5c7d-2 jlUflY"]').eq(18).click();
      cy.get('[class="sc-6e8c36d4-6 sc-f6926cfa-3 bWIHpw ePldHl"]');
      cy.wait(3000);
      cy.contains('button', 'Continue to Connection Details').click();
      cy.wait(8000);
      cy.get('[name="address.AddressLine"]').type('16 Tennyson Rd, CONCORD NSW');                                         // Enetring the address for search the address
      cy.get('[class="sc-6d362b9d-6 fHKKLZ"]').click();
      cy.get('[name="address.UnitNumber"]').type('23');
      cy.get('[class="default-select__single-value css-1dimb5e-singleValue"]').eq(0).click();
      cy.wait(2000);
      cy.contains('div', 'APARTMENT').click();
      cy.get('[name="address.Postcode"]').clear();
      cy.get('[name="address.Postcode"]').type('2000');
      cy.contains('span', 'Email').click();
      cy.get('[name="bankName"]').type('Greater Bank');                                                                    // Enetering the bank details for completing journey
      cy.get('[name="branchName"]').type('New South Wales');
      cy.get('[name="customerName"]').type('Apoorva Joshi');
      cy.get('[name="accountNo"]').type('123456789');
      cy.get('[name="BSB"]').type('123456');
      cy.wait(3000);
      cy.get('[class="sc-6e8c36d4-6 sc-f6926cfa-3 bWIHpw ePldHl"]').eq(3);
      cy.contains('button', 'Continue to Review Details').click();                                                          // click submit and move to review page
      cy.wait(3000);
      cy.get('[aria-label="Please enter verification code. Digit 1"]').type('5');                                           // enter the verfication code for completing journey
      cy.get('[aria-label="Digit 2"]').type('7');
      cy.get('[aria-label="Digit 3"]').type('7');
      cy.get('[aria-label="Digit 4"]').type('5');
      cy.wait(4000);
      cy.contains('button','Submit application').click();    
      cy.wait(8000);  
      cy.contains('Reference Number:')
        .invoke('text')
        .then((value1) => {
       cy.get('[class="sc-6e8c36d4-5 jAyAGj"]').eq(2)
           .invoke('text')
           .then((value2) => {
         const data ={               
            Key1 : value1.trim().replace('Reference Number:', ''),
            Key2 : value2.trim().replace('Reference Number:', '')
         };
         cy.writeFile('cypress/fixtures/output.json', data)
        });
     });                                                             
  });
   it('Sale with Movein YES', () => {
       cy.visit('https://csapp-qa01.cimet.io/energy');
       cy.clearCookies();
       cy.wait(3000);
       cy.get('[list="found-addresses"]').type('2000');                                                                // type the 2000 postcode for search address
       cy.get('[class="sc-6d362b9d-6 fHKKLZ"]').eq(4).click();                                                         // select the address after search the address
       cy.get('[type="button"]').click();
       cy.wait(2000);
       cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(2).click();                                                         // select the answer for the question with journey
       cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(4).click();
       cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(5).click();
       cy.get('[class="react-datepicker__input-container"]').type('27/02/2025');
       cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(8).click();
       cy.get('[class="sc-309fbc61-0 fMPLzp"]').eq(10).click();
       cy.get('[type="checkbox"]').click();
       cy.wait(2000);
       cy.get('[class="sc-7f67791e-0 sc-7f67791e-1 khdfpI gqzmtj"]').click();                                           // click on submit after selecting all the answer the question
       cy.wait(2000);
       cy.get('[name="name"]').type('Apoorva Joshi');                 // Entering personal details on the popup
       cy.get('[name="email"]').type('apoorva.joshi@cimet.com.au');
       cy.get('[name="phone"]').type('0420580919');
       cy.get('[type="submit"]').click();
       cy.wait(100000);
       cy.get('[class="sc-93dc423a-2 iKqRVf"]').click();
       cy.get('[class="sc-7f67791e-0 sc-7f67791e-1 sc-7f67791e-8 khdfpI gqzmtj eFVzNC"]').eq(0).click();     
       cy.wait(20000);
       cy.contains('Miss').click();
       cy.get('[name="dateOfBirth"]').type('11/04/1996');
       cy.get('[class="sc-6e8c36d4-6 sc-f6926cfa-3 bWIHpw ePldHl"]').eq(1).click();
       cy.wait(5000);
       cy.get('[class="default-select__input"]').type('CIMET').click();
       cy.wait(5000);
       cy.get('#react-select-2-option-1').click();
       cy.get('[name="position"]').type('Business');
       cy.contains('Yes').click();
       cy.contains('Drivers Licence').click();
       cy.contains('ACT').click();
       cy.get('[name="primary.licence_number"]').type('12345678');                                                       // Enetering driving licence details through journey
       cy.get('[name="primary.licence_card_number"]').type('123456');
       cy.get('[name="primary.licence_expiry_date"]').type('12/05/2025');
       cy.contains('Australian Passport').click();                                                                       // entering passport details through journey
       cy.get('[name="secondary.passport_number"]').type('12345678900');
       cy.get('[name="secondary.passport_expiry_date"]').type('12/07/2026');
       cy.contains('Medical Information').click();                                                                        // selection answer related to medical information
       cy.get('[class="sc-8bc41c5a-2 eSawVP"]').eq(17).click();
       cy.get('[class="sc-8bc41c5a-2 eSawVP"]').eq(18).click();
       cy.get('[class="sc-6e8c36d4-6 sc-f6926cfa-3 bWIHpw ePldHl"]');
       cy.wait(3000);
       cy.contains('button', 'Continue to Connection Details').click();
       cy.wait(8000);
       cy.get('[name="address.AddressLine"]').type('16 Tennyson Rd, CONCORD NSW');                                         // Enetring the address for search the address
       cy.get('[class="sc-6d362b9d-6 fHKKLZ"]').click();
       cy.get('[name="address.UnitNumber"]').type('23');
       cy.get('[class="default-select__single-value css-1dimb5e-singleValue"]').eq(0).click();
       cy.wait(2000);
       cy.contains('div', 'APARTMENT').click();
       cy.get('[name="address.Postcode"]').clear();
       cy.get('[name="address.Postcode"]').type('2000');
       cy.contains('span', 'Email').click();
       cy.get('[name="bankName"]').type('Greater Bank');                                                                    // Enetering the bank details for completing journey
       cy.get('[name="branchName"]').type('New South Wales');
       cy.get('[name="customerName"]').type('Apoorva Joshi');
       cy.get('[name="accountNo"]').type('123456789');
       cy.get('[name="BSB"]').type('123456');
       cy.wait(3000);
       cy.get('[class="sc-6e8c36d4-6 sc-f6926cfa-3 bWIHpw ePldHl"]').eq(3);
       cy.wait(2000);
       cy.contains('button', 'Continue to Review Details').click();                                                          // click submit and move to review page
       cy.wait(3000);
       cy.get('[aria-label="Please enter verification code. Digit 1"]').type('5');                                           // enter the verfication code for completing journey
       cy.get('[aria-label="Digit 2"]').type('7');
       cy.get('[aria-label="Digit 3"]').type('7');
       cy.get('[aria-label="Digit 4"]').type('5');
       cy.wait(4000);
       cy.contains('button','Submit application').click();    
       cy.wait(8000);  
       cy.contains('Reference Number:') 
         .invoke('text') 
         .then((value3) => {
        cy.get('[class="sc-6e8c36d4-5 jAyAGj"]').eq(2)
            .invoke('text')
            .then((value4) => {
          const data ={  
             Key1 : value1.replace(value1),
             Key2 : value2.replace(value2),            
             Key3 : value3.trim().replace('Reference Number:', ''), 
             Key4 : value4.trim().replace('Reference Number:', '')
          };
          cy.writeFile('cypress/fixtures/output.json', data)
         });
      });                    
   });
});