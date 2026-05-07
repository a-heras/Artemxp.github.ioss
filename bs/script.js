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
        var url = $(this).attr('data-video');
        var template = $('.wrapper-player').clone();
        template.find('iframe').attr('src', url.replace("watch?v=", "embed/"));
        p.open(template.html());
    });

    $('.button-call-me').on('click', function() { p.open($('.wrapper-call-me').html()); });
    $('.button-price').on('click', function() { p.open($('.wrapper-get-price').html()); });
    $(document).on('click', '.close img', p.close);

    function resizeIframe() {
        var $if = $('.popup-modal iframe');
        $if.css("height", ($if.width() / 1.77) + "px");
    }
    $(window).on('resize', resizeIframe);
});
