$(function () {
    function Popup(options) {
        var popup = this;
        popup.overlay = $(options.overlay);
        popup.popupModal = $(options.popupModal);

        this.open = function(content) {
            popup.popupModal.html(content);
            popup.overlay.addClass('open');
            popup.popupModal.addClass('open');

        }
        this.close = function(){

            popup.overlay.removeClass('open');
            popup.popupModal.removeClass('open');
        }
        popup.overlay.on('click', function() {
            popup.close();
        });

    }
    var p = new Popup({
        overlay: '.overlay',
        popupModal: '.popup-modal'
    });

    var iframe = $('iframe');
    $('.play').on('click', function(){
        var attr = $(this).attr('data-video');
        iframe.attr('src', attr);
        p.open(iframe);
    });
    console.log($('.close img'));



    $('.button-call-me').on('click', function (){
        var a = $('.wrapper-call-me');
        p.open(a.html());
        $('.close img').on('click', function (){
            p.close();
        });
    });
});
