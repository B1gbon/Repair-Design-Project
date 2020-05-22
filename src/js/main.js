/*
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
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      modal.toggleClass('modal--visible');
    }
  });
  $('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			modal.toggleClass('modal--visible');					
		}
	});	
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('.upbutton').is(':hidden')) {
            $('.upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('.upbutton').stop(true, false).fadeOut('fast'); }
});
$('.upbutton').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});



});
