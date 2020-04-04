const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card-accessed');

for (const card of cards) {
    card.addEventListener("click", function() {
        const cardAccessedID = card.getAttribute('id');

        modalOverlay.classList.add('active');
    });

}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
});