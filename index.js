
var customerName = `bob`;
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase();
      } else {
        console.log('customerName is not a valid string.');
      }
    }
// code to set the best customer
function setBestCustomer() {
    bestCustomer = `not bob`
}

// Define the overwriteBestCustomer function
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
// Declare the leastFavoriteCustomer variable as global
var leastFavoriteCustomer;

//change least favourite customer function
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else';
}

module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};