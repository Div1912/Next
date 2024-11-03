document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const messages = document.getElementById('messages');
  
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerText = userInput;
    messages.appendChild(userMessage);
  
    document.getElementById('user-input').value = '';
  
    fetch('https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        queryInput: {
          text: {
            text: userInput,
            languageCode: 'en'
          }
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('message', 'bot-message');
      botMessage.innerText = data.queryResult.fulfillmentText;
      messages.appendChild(botMessage);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  