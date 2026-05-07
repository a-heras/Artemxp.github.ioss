$(function () {
    function Popup(options) {
        var popup = this;
        popup.overlay = $(options.overlay);
        popup.popupModal = $(options.popupModal);

        this.open = function(content) {
            popup.popupModal.html(content);
            popup.overlay.addClass('open');
            popup.popupModal.addClass('open');
            resizeIframe();
        };

        this.close = function() {
            popup.overlay.removeClass('open');
            popup.popupModal.removeClass('open');
            popup.popupModal.empty();
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
        var playerTemplate = $('.wrapper-player').clone();
        
        playerTemplate.find('iframe').attr('src', videoUrl);
        
        p.open(playerTemplate.html());
    });

    $('.button-call-me').on('click', function () {
        var formHtml = $('.wrapper-call-me').html();
        p.open(formHtml);
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
