const cardsAccessed = document.querySelectorAll('.card-accessed');
const card = document.querySelector('.card')

for (const card of cardsAccessed) {
    const cardAccessedID = card.getAttribute('id')

    card.addEventListener("click", function() {
        if (cardAccessedID != null) {
            window.location.href = `/recipe/${cardAccessedID}`
        }
    });
}