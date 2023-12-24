// Import necessary functions
const configureButton = require('./configButton');
const identifyInquiry = require('./identifyInquiry');
const sendResponse = require('./sendResponse');
const logActivity = require('./logActivity');

// Function to trigger the Zap
function triggerZap() {
  // Identify the most recent inquiry
  identifyInquiry()
    .then(inquiry => {
      // Send a response to the inquiry
      sendResponse(inquiry)
        .then(() => {
          // Log the activity
          logActivity(inquiry)
            .then(() => {
              console.log('Zap successfully triggered.');
            })
            .catch(err => {
              console.error('Failed to log activity: ' + err);
            });
        })
        .catch(err => {
          console.error('Failed to send response: ' + err);
        });
    })
    .catch(err => {
      console.error('Failed to identify inquiry: ' + err);
    });
}

// Configure the button
configureButton(triggerZap);
