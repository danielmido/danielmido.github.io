$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();
   });


// Parallax

    // About
    $(window).on('load', function() {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    })

    // Scroll 
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        // Jumbotron
        $('.jumbotron img').css({
            'transform' : 'translate(0px, '+ wScroll/4.5 +'%)'
        })

        $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+ wScroll/2 +'%)'
        })

        $('.jumbotron p').css({
            'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
        })


        // Portofolio
        if( wScroll > $('.portofolio').offset().top ) {
            $('.portofolio .thumbnail').each(function(i) {
                setTimeout(function() {
                    $('.portofolio .thumbnail').eq(i).addClass('muncul');
                }, 300 * i)
            })
        }
    })
