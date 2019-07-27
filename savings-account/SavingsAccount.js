import { throwError } from "rxjs";

function savingsAccount(savingAccountnum, emailperson, firstname, lastname) {

  this.savingAccountnum = savingAccountnum;
  this.emailperson = emailperson;
  this.firstname = firstname;
  this.lastname = lastname;

  if (this.savingAccount.length !== 6) {
    throwError ;//"account number length is not equal to 6";
  }
  return savingAccountnum;
}

export {
  savingsAccount,
};
