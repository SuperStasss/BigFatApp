(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-fruts]"),
        closeModalBtn: document.querySelector("[data-modal-close-fruts]"),
        modal: document.querySelector("[data-modal-fruts]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-fruits");
    }
})();