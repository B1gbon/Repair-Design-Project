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
var mySwiper = new Swiper ('.swiper-container', {
  
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');


  next.css('left', prev.width() + 24 + bullets.width() + 5 )
  bullets.css('left', prev.width() + 24 )


new WOW().init();


function validateForm(form){
  $(form).validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userQuestion: "required",
      
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Слишком короткое имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Некорректно введен номер"
      },
      userQuestion: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите Ваш email в формате name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function(){
         $(form)[0].reset();
          // $(form).find('input').val("");
          // modalAnswer.toggleClass('modal-answer_visible');
          // modal.removeClass('modal_visible');
          // $('.modal-answer__title').text('Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
          // $(form).text('Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
          $(form).html('<p class="modal-answer__text">Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут. <br><br>Чтобы узнавать новости первыми, подпишитесь на нашу группу в ВК <br><a class="modal-answer__link" href="https://vk.com/frontend_katrina" target="_blank">Подписаться <img src="./img/vk-icon.svg" alt="vk"></a></p>');
        },
        error: function(jqXHR, textStatus) {
          console.error(jqXHR + " " + textStatus);
        }
      });
    }
  });
}
validateForm('.modal__form');
validateForm('.control__form');
validateForm('.footer__form');

  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона"});


  // карта Yandex
  //Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;

  function init() {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 18            
        }, {
            searchControlProvider: 'yandex#search'
        }),        
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Торговый центр; ул. Нансена, 239, Ростов-на-Дону, Россия',
            balloonContent: 'Прямой телефон +7 (999) 768 32 99'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
// Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
var layer = myMap.layers.get(0).get(0);
 
// Решение по callback-у для определения полной загрузки карты
waitForTilesLoad(layer).then(function() {
  // Скрываем индикатор загрузки после полной загрузки карты
  spinner.removeClass('is-active');
});
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
return new ymaps.vow.Promise(function (resolve, reject) {
  var tc = getTileContainer(layer), readyAll = true;
  tc.tiles.each(function (tile, number) {
    if (!tile.isReady()) {
      readyAll = false;
    }
  });
  if (readyAll) {
    resolve();
  } else {
    tc.events.once("ready", function() {
      resolve();
    });
  }
});
}

function getTileContainer(layer) {
for (var k in layer) {
  if (layer.hasOwnProperty(k)) {
    if (
      layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
      || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
    ) {
      return layer[k];
    }
  }
}
return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
var script = document.createElement("script");

if (script.readyState){  // IE
  script.onreadystatechange = function(){
    if (script.readyState == "loaded" ||
            script.readyState == "complete"){
      script.onreadystatechange = null;
      callback();
    }
  };
} else {  // Другие браузеры
  script.onload = function(){
    callback();
  };
}

script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
$('.ymap-container').mouseenter(function(){
    if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

    // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
      check_if_load = true; 

  // Показываем индикатор загрузки до тех пор, пока карта не загрузится
      spinner.addClass('is-active');

  // Загружаем API Яндекс.Карт
      loadScript("https://api-maps.yandex.ru/2.1?apikey=ddf951ec-566e-4401-aece-b607484eb739&lang=ru_RU", function(){
         // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
         ymaps.load(init);
      });                
    }
  }
);  
}

$(function() {

//Запускаем основную функцию
ymap();

})
});


