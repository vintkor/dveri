/*__________________________ Preloader __________________________*/

var documentReady = $(document).ready();

function myEnter(){

	if(documentReady) {

		$(".preloader").hide();

		$(".dveri_left").delay(8000).css({
			"transform": "translateX(-50vw)"
		});

		$(".dveri_right").delay(8000).css({
			"transform": "translateX(50vw)"
		});

		$("body").css({
			"overflowY": "auto"
		})
	}

}

myEnter();

/*__________________________ Other scripts __________________________*/

$(document).ready(function(){

	// _____________________________ Wow animate ______________________

	new WOW().init();

	/*-------------------------------- Плавная анимация по меню ---------------------------------*/

	$(".bounce").on("click", "a", function(event) {
	    //отменяем стандартную обработку нажатия по ссылке
	    event.preventDefault();

	    //забираем идентификатор бока с атрибута href
	    var id = $(this).attr('href'),

	        //узнаем высоту от начала страницы до блока на который ссылается якорь
	        top = $(id).offset().top;

	    //анимируем переход на расстояние - top за 1500 мс
	    $('body,html').animate({
	        scrollTop: top
	    }, 800);
	});

	/*------------------------------- Получение JSON с отправленных данных -----------------------------*/

	$(".ajaxform").submit(function() {
	    var form = $(this);
	    var error = false;
	    if (!error) {
	        var data = form.serialize();

	        function success(returneData) {
	            console.log(returneData);
	        }
	        $.ajax({
	            type: 'POST',
	            url: 'json.php',
	            dataType: 'json',
	            data: data,
	            success: function(data) {
	                var model = data.value;
	                $('.hidden-jquery').val(model);
	            }
	        });
	    }
	    return false;
	});

	/*------------------------------- Фильтрация продуктов ----------------------*/

	$(function() {
	    $('#Container').mixItUp();
	});

})