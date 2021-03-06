/*------------------------------- Выравнивание блоков по высоте -----------------------------*/
    function setEqualHeight(columns){
        var tallestcolumn = 0;
        columns.each(function(){
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn){
               tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

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

	/*------------------------------- Фильтрация продуктов ----------------------*/

	$(function() {
	    $('#Container').mixItUp();
	});

	/*------------------------------- Смена изображений в модале ----------------------*/
	$('.small-img').click(function(){

		var url = $(this).attr('data-img');

		$('.big-img').attr({
			src: url
		});

	})

	/*------------------------------- Маска для поля номера телефона -----------------------------*/

    jQuery(function($) {
        $(".phone2").mask("8 (999) 999-99-99");
    });

    /*------------------------------- Отправка почты -----------------------------*/

	$(".ajaxform2").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone39').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 1 -----------------------------*/

	$(".ajaxform10").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone10').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
        	$('.product-1').modal('toggle'); // закрываем модаль
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 2 -----------------------------*/

	$(".ajaxform11").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone11').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-2').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 3 -----------------------------*/

	$(".ajaxform12").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone12').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-3').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 4 -----------------------------*/

	$(".ajaxform13").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone13').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-4').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 5 -----------------------------*/

	$(".ajaxform14").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone14').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-5').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 6 -----------------------------*/

	$(".ajaxform15").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone15').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-6').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 7 -----------------------------*/

	$(".ajaxform16").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone16').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-7').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	/*------------------------------- Отправка почты product 8 -----------------------------*/

	$(".ajaxform17").submit(function(){ // перехватываем все при событии отправки

        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        form.find('input').each( function(){ // пробежим по каждому полю в форме
            if ($('.phone17').val() == '') { // если находим пустое (было так ---if ($(this).val() == '') {---)
                sweetAlert("Ой...", "Необходимо указать номер телефона!", "error"); // говорим заполняй!
                error = true; // ошибка
            }
        });

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $('.product-8').modal('toggle'); // закрываем модаль
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mailto.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('.send').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                complete: function(data) { // событие после любого исхода
                    swal("Отлично!", "Менеджер-консультант свяжется с Вами в ближайшее время.", "success");
                    //                    alert('Зпасибо за доверие! Менеджер-консультант свяжется с Вами в ближайшее время.'); // пишем что все ок
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
	});

	$(document).ready(function() {
	    setEqualHeight($(".h3-wrap h3"));
        setEqualHeight($(".mix"));
        setEqualHeight($(".h3-wrap-first"));
	});

    /*------------------------------- Подключение LightGallery -----------------------------*/
    $('#video-gallery').lightGallery({
        loadYoutubeThumbnail: true,
        youtubeThumbSize: 'default',
        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_medium',
    }); 
		
})