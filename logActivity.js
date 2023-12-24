// Import necessary libraries
const zendesk = require('node-zendesk');

// Create a client
const client = zendesk.createClient({
  username: 'your_username',
  token: 'your_token',
  remoteUri: 'https://your_zendesk_subdomain.zendesk.com/api/v2'
});

// Function to log activity
function logActivity(inquiry) {
  // Define the note to be added
  const note = {
    body: "Inquiry acknowledged and response sent."
  };

  // Update the ticket with the note
  client.tickets.update(inquiry.id, {ticket: {comment: note}}, (err, req, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Activity logged for inquiry: ${inquiry.id}`);
  });
}

// Export the function
module.exports = logActivity;
