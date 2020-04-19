const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const cards = document.querySelectorAll('.card-accessed');

for (const card of cards) {
    card.addEventListener("click", function() {
        const cardAccessedID = card.getAttribute('id');

        modalOverlay.classList.add('active');

        modalContent.innerHTML = document.getElementById(cardAccessedID).innerHTML;
    });
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
});