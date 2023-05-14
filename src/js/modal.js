(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        form: document.querySelector(".freshbox-form")
    };

    // refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
        refs.form.addEventListener("submit",(event) =>{
        event.preventDefault();
        refs.modal.classList.toggle("is-hidden");
    })
})();