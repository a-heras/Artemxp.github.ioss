$(function () {
    function Popup(options) {
        var popup = this;
        popup.overlay = $(options.overlay);
        popup.popupModal = $(options.popupModal);
        this.open = function(content) {
            popup.popupModal.html(content);
            popup.overlay.fadeIn(300);
            popup.popupModal.fadeIn(300); 
            resizeIframe();                
        };
        this.close = function() {
            popup.overlay.fadeOut(200);
            popup.popupModal.fadeOut(200);
            setTimeout(function() {
                popup.popupModal.empty();
            }, 200);
        };
        
        popup.overlay.on('click', function() {
            popup.close();
        });
    }

    var p = new Popup({
        overlay: '.overlay',
        popupModal: '.popup-modal'
    });

    $('.play').on('click', function() {
        var videoUrl = $(this).attr('data-video');
        var template = $('.wrapper-player').clone();
        
        if (videoUrl) {
            var embedUrl = videoUrl.replace("watch?v=", "embed/");
            template.find('iframe').attr('src', embedUrl);
        }
        
        p.open(template.html());
    });

    $('.button-call-me').on('click', function () {
        var formHtml = $('.wrapper-call-me').html();
        p.open(formHtml);
    });

    $('.button-price').on('click', function () {
        var priceFormHtml = $('.wrapper-get-price').html();
        p.open(priceFormHtml);
    });

    $(document).on('click', '.close img', function() {
        p.close();
    });

    function resizeIframe() {
        $('.popup-modal iframe').each(function() {
            var width = $(this).width();
            $(this).css("height", (width / 1.7777) + "px");
        });
    }

    $(window).on('resize', resizeIframe);
});
