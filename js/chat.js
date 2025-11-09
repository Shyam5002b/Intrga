// Get service name from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const serviceName = urlParams.get('service') || 'Our Service';

// Update page title and header
document.title = `${serviceName} - Chat Interface`;
document.getElementById('serviceName').textContent = serviceName;

// Chat functionality
const messagesArea = document.getElementById('messagesArea');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const typingIndicator = document.getElementById('typingIndicator');

// Initial greeting message
function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">${message}</div>
    `;
    messagesArea.appendChild(messageDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-content">${message}</div>
    `;
    messagesArea.appendChild(messageDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function showTypingIndicator() {
    typingIndicator.classList.add('active');
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function hideTypingIndicator() {
    typingIndicator.classList.remove('active');
}

// Send message
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addUserMessage(message);
    messageInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate bot response after delay
    setTimeout(() => {
        hideTypingIndicator();
        
        // Simple response logic
        let botResponse = `Thank you for your message about ${serviceName}. Our team will review your inquiry and provide detailed information. How else can I assist you with ${serviceName}?`;
        
        // Customize responses based on keywords
        if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
            botResponse = `For ${serviceName} pricing, our rates are competitive and depend on project scope. We'd be happy to provide a detailed quote. Would you like to schedule a consultation?`;
        } else if (message.toLowerCase().includes('time') || message.toLowerCase().includes('duration')) {
            botResponse = `${serviceName} timeline varies by project size. Typically, we can complete takeoffs within 24-48 hours. Would you like to discuss your specific project timeline?`;
        } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
            botResponse = `Hello! I'm here to help you with ${serviceName}. What specific information are you looking for?`;
        } else if (message.toLowerCase().includes('help')) {
            botResponse = `I can help you with:\n• Pricing information for ${serviceName}\n• Project timelines\n• Service details\n• Getting a quote\n\nWhat would you like to know?`;
        }
        
        addBotMessage(botResponse);
    }, 1000 + Math.random() * 1000);
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Initial greeting
window.addEventListener('load', () => {
    setTimeout(() => {
        addBotMessage(`Welcome! I'm your assistant for ${serviceName}. How can I help you today?`);
    }, 500);
});
