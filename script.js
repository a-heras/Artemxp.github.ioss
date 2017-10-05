(function() {

    function Popup(options) {
        var popup = this;
        popup.overlay = document.querySelector(options.overlay);
        popup.popupModal = document.querySelector(options.popupModal)

        this.open = function (content) {
            popup.popupModal.innerHTML = content;
            popup.overlay.classList.add('open');
            popup.popupModal.classList.add('open');

        }
        this.close = function(){
            popup.overlay.classList.remove('open');
            popup.popupModal.classList.remove('open');
        }
        popup.overlay.onclick = popup.close;

    }

    var p = new Popup({
      overlay: '.overlay',
      popupModal: '.wrapper-modal',
    });

    document.querySelector('.button').onclick = function() {
      var form = document.querySelector('.wrapper-modal');
      p.open(form.innerHTML);
    };

    var input = document.querySelectorAll('.popup-form-input'),
        form = document.querySelector('form');

          form.onclick = function () {
              alert('1');
          }
        form.onsubmit = function(e) {
          alert('1');
        }


})();
