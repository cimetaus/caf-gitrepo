class LoginPage{
  get firstNameInput() {
    return cy.get('input[name="firstName"]');
  } 
  get lastNameInput() {
    return cy.get('input[name="lastName"]');
  }

  get emailInput(){
     return cy.get('input[name="email"]');
  }
  
  get phoneNumberInput() {
    return cy.get('input[name="phoneNumber"]');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }
  enterFirstName(firstName) {
    this.firstNameInput.type(firstName);
  }
  enterLastName(lastName) {
    this.lastNameInput.type(lastName);
  }
  enterEmail(email) {
    this.emailInput.type(email);
  }
  enterphoneNumber(phoneNumber) {
    this.phoneNumberInput.type(phoneNumber);
  }
  clickLoginButton() {
    this.loginButton.click();
  }
  login(firstName, lastName, email, phoneNumber) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterEmail(email);
    this.enterphoneNumber(phoneNumber);
    this.clickLoginButton();
  }
}

export default new LoginPage();