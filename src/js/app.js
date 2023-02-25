import Messenger from "./components/messenger";

const messenger = new Messenger();
const inputMessage = document.querySelector('.input-content');
let text = null;

inputMessage.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    text = inputMessage.value;
    messenger.newMessage(text);
    inputMessage.value = '';
  }
})