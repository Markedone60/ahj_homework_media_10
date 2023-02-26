export default function createModal() {
  const modal = document.createElement('div');

  modal.className = 'modal';
  modal.innerHTML = `<h3 class="modal-header">Something went wrong</h3>
    <p class="modal-message">Please let us get your coordinates</p>
    <p class="modal-message">Latitude and longitude, separated by comma</p>
    <input type"text" class="modal-input">
    <div class="modal-buttons">
      <button class="modal-ok button" type="button">Ok</button>
      <button class="modal-cancel button" type="button">Отмена</button>
    </div>`;
  return modal;
}