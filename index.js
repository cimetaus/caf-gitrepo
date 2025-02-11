
Cypress.on('uncaught:exception', (err, runnable) => {
  // Example: Ignore specific error with message
  if (err.message.includes('expectedError')) {
    return false; // Ignore this error
  }
  
  // Default behavior is to fail the test for other uncaught exceptions
  return true;
});
