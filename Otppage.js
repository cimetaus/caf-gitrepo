class OtpPage{
    get digit1Input() {
        return cy.get('input[aria-label="Please enter verification code. Digit 1"]');
      }
    get digit2Input() {
        return cy.get('input[aria-label="Digit 2"]');
    }
    get digit3Input() {
        return cy.get('input[aria-label="Digit 3"]');
    }
    get digit4Input() {
        return cy.get('input[aria-label="Digit 4"]');
    }
    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    enterDigit1(Digit1) {
        this.digit1Input.type(5);
    }
    
    enterDigit2(Digit2) {
        this.digit2Input.type(7);
    }

    enterDigit3(Digit3) {
        this.digit3Input.type(7);
    }

    enterDigit4(Digit4) {
        this.digit4Input.type(5);
    }

    clickLoginButton() {
        this.loginButton.click();
      }

    Otp(Digit1, Digit2, Digit3, Digit4) {
        this.enterDigit1(Digit1);
        this.enterDigit2(Digit2);
        this.enterDigit3(Digit3);
        this.enterDigit4(Digit4);
        this.clickLoginButton();
      }
}

export default new OtpPage();
