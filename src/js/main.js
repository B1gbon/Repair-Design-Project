document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const modal_wrapper = document.querySelector('.modal');
  const modal_l = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    });
  closeBtn.addEventListener('click', switchModal);
 
  modal_wrapper.addEventListener('click', function (e) {
    const target = e.target;
    const its_modal = target == modal_l || modal_l.contains(target);
    const its_wrappMenu = target == modal_wrapper;
    const modal_is_active = modal_wrapper.classList.contains('modal--visible');

    if (!its_modal && its_wrappMenu && modal_is_active) {
    switchModal();
};
});

  document.onkeydown = function(evt) {
  evt = evt || window.event;
  const modal_is_active = modal_wrapper.classList.contains('modal--visible');
  if (evt.keyCode == 27) {
      if (modal_is_active) {
              switchModal();
          };
  };
};




});
