module.exports = (on, config) => {
    on('task', {
      waitForApproval() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(null); // Simulate manual action completion
          }, 30000); // 30 seconds delay
        });
      },
    });
  };