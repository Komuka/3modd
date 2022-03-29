// Первое белое меню и крестик
$('document').ready(function(){
        $('.but1text').click(function(){
            $('#hide').slideToggle('slow');
      $('#hidee').slideToggle();
            return false;
    });
 });
 // закрыть с помощью крестика
 $('document').ready(function(){
         $('#hidee').click(function(){
             $('#hide').toggle('hide-off');
       $('#hidee').toggle('hide-off');
     });
  });

// Второе белое меню
$('document').ready(function(){
        $('.but2text').click(function(){
            $('#hide2').slideToggle('slow');
      $('#hidde').slideToggle();
            return false;
    });
 });
 $('document').ready(function(){
         $('#hidde').click(function(){
             $('#hide2').toggle('hide-off');
       $('#hidde').toggle('hide-off');
     });
  });

// Третье белое меню
$('document').ready(function(){
        $('.but3text').click(function(){
            $('#hide3').slideToggle('slow');
      $('#hiide').slideToggle();
            return false;
    });
 });
 $('document').ready(function(){
         $('#hiide').click(function(){
             $('#hide3').toggle('hide-off');
       $('#hiide').toggle('hide-off');
     });
  });

 // начать
$('document').ready(function(){
        $('.but4text').click(function(){
            $('.one').toggleClass('oneon');
            $('.two').toggleClass('twoon');
    });
});

 // назад
$('document').ready(function(){
        $('.nazad').click(function(){
            $('.one').toggleClass('oneon');
            $('.two').toggleClass('twoon');
    });
});

// добавление и удаление свечения
$('document').ready(function(){
        $('.odin').click(function(){
            $('.tec1').addClass('textshadow');
            $('.tec2').removeClass('textshadow');
            $('.tec3').removeClass('textshadow');
            $('.tec4').removeClass('textshadow');
 });
});
$('document').ready(function(){
        $('.dva').click(function(){
            $('.tec2').addClass('textshadow');
            $('.tec1').removeClass('textshadow');
            $('.tec3').removeClass('textshadow');
            $('.tec4').removeClass('textshadow');
    });
});
$('document').ready(function(){
        $('.tri').click(function(){
            $('.tec3').addClass('textshadow');
            $('.tec1').removeClass('textshadow');
            $('.tec2').removeClass('textshadow');
            $('.tec4').removeClass('textshadow');
    });
});
$('document').ready(function(){
        $('.chetyre').click(function(){
            $('.tec4').addClass('textshadow');
            $('.tec1').removeClass('textshadow');
            $('.tec2').removeClass('textshadow');
            $('.tec3').removeClass('textshadow');
    });
});
$('document').ready(function(){
        $('.nazad').click(function(){
            $('.tec4').removeClass('textshadow');
            $('.tec1').removeClass('textshadow');
            $('.tec2').removeClass('textshadow');
            $('.tec3').removeClass('textshadow');
            $('#balsam-on').css("display","none");
            $('#sambuka-on').css("display","none");
            $('#sake-on').css("display","none");
            $('#tecila-on').css("display","none");
    });
});

// добавление и удаление вкусов
$('document').ready(function(){
        $('.odin').click(function(){
            $('#tecila-on').toggle();
            $('#balsam-on').css("display","none");
            $('#sambuka-on').css("display","none");
            $('#sake-on').css("display","none");
 });
});
$('document').ready(function(){
        $('.dva').click(function(){
            $('#balsam-on').toggle();
            $('#tecila-on').css("display","none");
            $('#sambuka-on').css("display","none");
            $('#sake-on').css("display","none");
 });
});
$('document').ready(function(){
        $('.tri').click(function(){
            $('#sambuka-on').toggle();
            $('#tecila-on').css("display","none");
            $('#balsam-on').css("display","none");
            $('#sake-on').css("display","none");
 });
});
$('document').ready(function(){
        $('.chetyre').click(function(){
            $('#sake-on').toggle();
            $('#tecila-on').css("display","none");
            $('#balsam-on').css("display","none");
            $('#sambuka-on').css("display","none");
 });
});

//скрытие второй секции и открытие третьей
$('document').ready(function(){
        $('.vpered').click(function(){
            $('.two').toggleClass('twoon');
            $('.three').toggleClass('threeon');
    });
});

// назад Х 2
$('document').ready(function(){
       $('.nazad3').click(function(){
           $('.two').toggleClass('twoon');
           $('.three').toggleClass('threeon');
           $('#trubochka1-on').css("display","none");
           $('#trubochka2-on').css("display","none");
           $('#trubochka3-on').css("display","none");
           $('#trubochka4-on').css("display","none");

   });
});

// добавление и удаление трубочек
$('document').ready(function(){
        $('.odin3').click(function(){
            $('#trubochka1-on').toggle();
            $('#trubochka2-on').css("display","none");
            $('#trubochka3-on').css("display","none");
            $('#trubochka4-on').css("display","none");
 });
});
$('document').ready(function(){
        $('.dva3').click(function(){
            $('#trubochka2-on').toggle();
            $('#trubochka1-on').css("display","none");
            $('#trubochka3-on').css("display","none");
            $('#trubochka4-on').css("display","none");
 });
});
$('document').ready(function(){
        $('.tri3').click(function(){
            $('#trubochka3-on').toggle();
            $('#trubochka1-on').css("display","none");
            $('#trubochka2-on').css("display","none");
            $('#trubochka4-on').css("display","none");
 });
});
$('document').ready(function(){
        $('.chetyre3').click(function(){
            $('#trubochka4-on').toggle();
            $('#trubochka1-on').css("display","none");
            $('#trubochka2-on').css("display","none");
            $('#trubochka3-on').css("display","none");
 });
});
