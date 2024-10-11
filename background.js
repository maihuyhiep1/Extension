chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'parseMessage') {
        // Simulating AI parsing with regex (can replace with NLP logic)
        const message = request.message;
        const bookingInfo = parseMessage(message);
        
        // Store the parsed booking info
        chrome.storage.local.set({ 'bookingInfo': bookingInfo }, () => {
            console.log('Booking info saved:', bookingInfo);
        });
        
        sendResponse({ status: 'done' });
    }
});

// A simple function simulating parsing with regex
function parseMessage(message) {
    let phoneNumber = message.match(/(\d{10,11})/)[0];
    let customerName = message.match(/[A-Za-zÀ-ỹ\s]+/)[0].trim();
    let date = message.match(/(\d{1,2}\/\d{1,2}\/\d{4})/)[0];
    let time = message.match(/(\d{1,2}h\d{1,2})/)[0];
    
    return {
        customerName,
        phoneNumber,
        guestCount: 1,
        date,
        time,
        service: 'cắt',
        stylist: 'Junior stylist'
    };
}
