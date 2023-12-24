// Import necessary libraries
const FlicClient = require('fliclib-nodejs');
const client = new FlicClient('localhost', 5551);

// Define the button
let button;

// Function to configure the button
function configureButton() {
    // Scan for available buttons
    client.once('ready', function() {
        client.startScanWizard(function(error, result) {
            if (error) {
                console.log("Failed to start scan wizard: " + error);
            } else if (result.result == 'WizardSuccess') {
                button = result.bdAddr;
                console.log("Successfully configured button: " + button);
            } else {
                console.log("Failed to configure button: " + result.result);
            }
        });
    });

    // Listen for button press
    client.on('bluetoothControllerStateChange', function(state) {
        console.log("Controller state change: " + state);
    });

    client.on('newVerifiedButton', function(bdAddr) {
        console.log("Button connected: " + bdAddr);
    });

    client.on('connectionStatusChanged', function(bdAddr, connected) {
        console.log("Button " + bdAddr + " is " + (connected ? "connected" : "disconnected"));
    });

    client.on('buttonSingleOrDoubleClickOrHold', function(bdAddr, clickType, wasQueued, timeDiff) {
        if (clickType === 'ButtonSingleClick') {
            console.log("Button was pressed");
            // Trigger the Zap
            triggerZap();
        }
    });
}

// Function to trigger the Zap
function triggerZap() {
    // This function will be implemented in main.js
}

// Export the function
module.exports = configureButton;
