$(document).ready(function(){
	$('.slider__wrap').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		slidesToShow: 1,
	});

	$('.slider__mobile').slick({
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		arrows: false,
	});

	$('.objects__slider').slick({
		centerMode: true,
		slidesToShow: 4,
		responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

	$('.partners__slider').slick({
		centerMode: true,
		slidesToShow: 7,
		responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: true,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

	$('.btn-toggle').click(function(){
		$('.header__mobile-menu').toggleClass('header__mobile-menu--active');
		$('body').toggleClass('body-overflow');
	});

	$(window).load(function(){
		$ (".header").sticky({ topSpacing: 0, className: 'sticky' });
	});

	$('.mask').mask("+380 999-99-99-99");

    // select
    $('select').each(function(){
    	var $this = $(this), numberOfOptions = $(this).children('option').length;

    	$this.addClass('select-hidden'); 
    	$this.wrap('<div class="select"></div>');
    	$this.after('<div class="select-styled"></div>');

    	var $styledSelect = $this.next('div.select-styled');
    	$styledSelect.text($this.children('option').eq(0).text());

    	var $list = $('<ul />', {
    		'class': 'select-options'
    	}).insertAfter($styledSelect);

    	for (var i = 0; i < numberOfOptions; i++) {
    		$('<li />', {
    			text: $this.children('option').eq(i).text(),
    			rel: $this.children('option').eq(i).val()
    		}).appendTo($list);
    	}

    	var $listItems = $list.children('li');

    	$styledSelect.click(function(e) {
    		e.stopPropagation();
    		$('div.select-styled.active').not(this).each(function(){
    			$(this).removeClass('active').next('ul.select-options').hide();
    		});
    		$(this).toggleClass('active').next('ul.select-options').toggle();
    	});

    	$listItems.click(function(e) {
    		e.stopPropagation();
    		$styledSelect.text($(this).text()).removeClass('active');
    		$this.val($(this).attr('rel'));
    		$list.hide();
	        //console.log($this.val());
	    });

    	$(document).click(function() {
    		$styledSelect.removeClass('active');
    		$list.hide();
    	});

    });

	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 219) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-119 }, 500); // анимируем скроолинг к элементу scroll_el
	        }
		    return false; // выключаем стандартное действие
    });

	$('form').each(function() {
		$(this).submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'form.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                }
            });
            return false;
        });

		$(this).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				number: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					minlength: 2
				},
				adress: {
					required: true,
					minlength: 2
				},
				city: {
					required: true,
					minlength: 2
				},
				type: {
					required: true,
					minlength: 2
				},
				volume: {
					required: true,
					minlength: 2
				},
				textarea: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				name: {
					required: "",
				},
				number: {
					required: "",
				},
				email: {
					required: "",
					email: "" 
				},
				adress: {
					required: "",
				},
				city: {
					required: "",
				},
				type:{
				  required: "",
				},
				volume: {
					required: "",
				},
				textarea: {
					required: "",
				},
			}
		});
	});
})