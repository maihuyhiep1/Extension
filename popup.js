document.getElementById('parseBtn').addEventListener('click', function() {
    let message = document.getElementById('message').value;
    
    // Send message to background script for parsing
    chrome.runtime.sendMessage({ action: 'parseMessage', message: message }, function(response) {
        console.log('Message parsed:', response.status);
    });
});
