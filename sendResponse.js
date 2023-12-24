// Import necessary libraries
const zendesk = require('node-zendesk');

// Create a client
const client = zendesk.createClient({
  username: 'your_username',
  token: 'your_token',
  remoteUri: 'https://your_zendesk_subdomain.zendesk.com/api/v2'
});

// Define the response template
const responseTemplate = "Dear Customer, we have received your inquiry and will get back to you within 24 hours. Thank you for your patience.";

// Function to send a response
function sendResponse(inquiry) {
  // Create a comment with the response template
  const comment = {
    body: responseTemplate
  };

  // Update the ticket with the comment
  client.tickets.update(inquiry.id, {ticket: {comment: comment}}, (err, req, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Response sent to inquiry: ${inquiry.id}`);
  });
}

// Export the function
module.exports = sendResponse;
