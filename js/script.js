$(document).ready(function () {

   

   // Фуннция для слайдеров (slick slider)

   $('.slider_wrap').slick({
      arrows:true, 
      dots:false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
   });



   // Запуск видео по кнопке в блоке PROMO

   $('.promo_video_button').on('click', function () {

      $('.video_modes img').hide();
      $('.bg_dark').hide();
      $(this).hide();                                    // Скрываем текущую кнопку, на которую нажали
      $('.promo_video_video').trigger('play');
      $('.promo_video_video').attr("src", $('.promo_video_video').attr("src").replace("autoplay=0", "autoplay=1"));
      
      // Альтернативный вариант запуска видео 
      // $('.promo_video_video')[0].play();  

      // Альтернативный вариант скрытия картинки и запуска видео через "родителя"
      // $(this).parent().find('img')[0].play();
      // $(this).parent().find('video')[0].play();
   });



   // Открытие блоков по клику в доп оборудовании

   $(document).ready(function() {

      $('.add_list_item').on('click', function(event) {
          event.preventDefault();                 //отменяем якорь наверх (делаем всегда для всех на всякий)
      
      let index = $(this).index('.add_list_item');

      $('.add_list_item').removeClass('add_list_item_active'); //убираем у всех класс активный, чтобы потом добавить только выбранному
      $(this).addClass('add_list_item_active'); 

      $('.add_item_box').removeClass('visible_class'); //удаляем у всех класс видимый
      $('.add_item_box').eq(index).addClass('visible_class');
      })

      // Скрытие блока с описанием доп оборудования при клики вне его области (вне области ссылки в списке)

      $(document).click( function(e){
         if ( $(e.target).closest('.add_list_item').length || $(e.target).closest('.add_item_box').length) {
             // клик внутри элемента 
             return;
         }
         // клик снаружи элемента 
         $('.add_item_box').removeClass('visible_class');
         $('.add_list_item').removeClass('add_list_item_active');
         
      });

  });



   
});
