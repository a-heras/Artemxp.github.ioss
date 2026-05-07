$(function () {
    function Popup(options) {
        var popup = this;
        popup.overlay = $(options.overlay);
        popup.popupModal = $(options.popupModal);

        this.open = function(content) {
            popup.popupModal.html(content);
            popup.overlay.fadeIn(200);
            popup.popupModal.fadeIn(200);
            resizeIframe();
        };

        this.close = function() {
            popup.overlay.fadeOut(200);
            popup.popupModal.fadeOut(200, function() {
                popup.popupModal.empty();
            });
        };

        popup.overlay.on('click', popup.close);
    }

    var p = new Popup({ overlay: '.overlay', popupModal: '.popup-modal' });

    $('.play').on('click', function() {
        var videoUrl = $(this).attr('data-video');
        var videoDesc = $(this).attr('data-desc') || '';
        var template = $('.wrapper-player').clone();
        var embedUrl = videoUrl.replace("watch?v=", "embed/");
        template.find('iframe').attr('src', embedUrl);
        template.find('.video-desc').text(videoDesc);
        p.open(template.html());
    });

    $('.button-call-me').on('click', function() {
        p.open($('.wrapper-call-me').html());
    });

    $('.button-price').on('click', function() {
        p.open($('.wrapper-get-price').html());
    });

    $(document).on('click', '.close img', function() {
        p.close();
    });

    function resizeIframe() {
        var $if = $('.popup-modal iframe');
        if ($if.length) {
            $if.css("height", ($if.width() / 1.77) + "px");
        }
    }

    $(window).on('resize', resizeIframe);
});
