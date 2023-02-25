import checkLocation from "./checkLocation";
import getGeo from "./getGeo";
import getDate from "./getDate";
import createModal from "./modal";

export default class Messenger {
  constructor() {
    this.messages = document.querySelector('.messenger');
    this.coords = null;
  }

  async newMessage(text) {
    this.coords = await getGeo();

    if (this.coords === 'none') {
      const modalError = document.querySelector('.modal');

      if (!modalError) {
        const modal = createModal();

        document.body.appendChild(modal);

        const ok = modal.querySelector('.modal-ok');
        const cancel = modal.querySelector('.modal-cancel');
        const input = modal.querySelector('.modal-input');

        ok.addEventListener('click', () => {
          const valid = checkLocation(input.value);

          if (valid) {
            this.coords = input.value;
            this.addMessage(text, this.coords);
            modal.parentNode.removeChild(modal);
          } else {
            alert('Введите корректные координаты');
          }
        });

        cancel.addEventListener('click', () => {
          modal.parentNode.removeChild(modal);
        });
      }
    } else {
      this.addMessage(text, this.coords);
    }
  }

  addMessage(text, geoPosition) {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerHTML = `<div class='message-item'>
        <p class="message-text">${text}</p>
        <div class="message-coordinates">${geoPosition}</div>
        </div>
        <div class="message-date">${getDate()}</div>`;

    this.messages.insertAdjacentElement('afterbegin', message);
  }

}