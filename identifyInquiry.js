// Import necessary libraries
const zendesk = require('node-zendesk');

// Create a client
const client = zendesk.createClient({
  username: 'your_username',
  token: 'your_token',
  remoteUri: 'https://your_zendesk_subdomain.zendesk.com/api/v2'
});

// Function to identify the most recent inquiry
function identifyInquiry() {
  // Get the most recent ticket
  client.tickets.listRecent((err, req, result) => {
    if (err) {
      console.log(err);
      return;
    }

    // Check if there are any tickets
    if (result.length === 0) {
      console.log('No recent inquiries found.');
      return;
    }

    // Get the most recent ticket
    const recentInquiry = result[0];

    console.log(`Identified recent inquiry: ${recentInquiry.id}`);
    
    // Pass the recent inquiry to the next function
    sendResponse(recentInquiry);
  });
}

// Function to send a response
function sendResponse(inquiry) {
  // This function will be implemented in sendResponse.js
}

// Export the function
module.exports = identifyInquiry;
