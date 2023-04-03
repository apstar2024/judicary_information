 class User {
    constructor(username, id) {
      this.username = username;
      this.id = id;
    }
    
    browseCase(caseId) {
      // code to browse a case
    }
    
    seeSchedule() {
      // code to see user's schedule
    }
  }
  
 class Judge extends User {
    constructor(username, id) {
      super(username, id);
    }
    
    browsePastCases() {
      // code to browse past cases
    }
  }
  
   class Lawyer extends User {
    constructor(username, id) {
      super(username, id);
    }
    
    browsePastCases() {
      // code to browse past cases
    }
    
    payToBrowseCase() {
      // code to pay to browse a case
    }
    makePayment(amount) {
        // code to make payment
    }
  }
  
   class Registrar extends User {
    constructor(username, id) {
      super(username, id);
    }
    
    addNewCase() {
      // code to add new case
    }
    
    updateCase() {
      // code to update case
    }
    
    scheduleCase() {
      // code to schedule case
    }
    
    addNewUser() {
      // code to add new user
    }
    
    deleteCase() {
      // code to delete case
    }
    
    deleteUser() {
      // code to delete user
    }
  }
  
  module.exports = {
  User,
  Judge,
  Lawyer,
  Registrar
};