const cards = document.querySelectorAll('.card-accessed');

for (const card of cards) {
    card.addEventListener("click", function() {
        const cardAccessedID = card.getAttribute('id');
    });
}