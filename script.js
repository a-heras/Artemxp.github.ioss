(function() {

    function Popup(options) {
        var popup = this;
        popup.overlay = document.querySelector(options.overlay);
        popup.popupModal = document.querySelector(options.popupModal)

        this.open = function (content) {
            popup.overlay.classList.add('open');
            popup.popupModal.classList.add('open');

        }
        this.close = function(){
            popup.overlay.classList.remove('open');
            popup.popupModal.classList.remove('open');
        }
        popup.overlay.onclick = popup.close;

    }

    function Check(options) {
        var check = this;
        check.form = document.querySelector(options.formCheck);
        check.input = document.querySelectorAll(options.inputCheck);
        check.fieldOutputError = document.querySelector(options.fieldOutputError);
        this.methodCheck = function () {
            check.form.onsubmit = function (e) {
                for (var i = 0; i < check.input.length; i++) {
                  var error = false;
                  var textError;
                  check.input[i].value = check.input[i].value.replace(/\s+/g,'');
                  if(check.input[i].value === ''){
                      check.input[i].classList.add('popup-form-input-err');
                      error = true;
                      textError = 'Внимание! Убедитесь, что контактные данные введены верно.';
                  }
                  else{
                      check.input[i].classList.remove('popup-form-input-err');
                  }
                  if (error) {
                      e.preventDefault();
                  }
                  }
                  if (textError == undefined) {
                      textError = '';
                  }
                check.fieldOutputError.innerHTML = textError;

            }
        }

    }
    var p = new Popup({
        overlay: '.overlay',
        popupModal: '.popup-modal',
    });
    var check1 = new Check({
        formCheck: 'form',
        inputCheck: '.popup-form-input',
        fieldOutputError: '.popup-form p'
    });
    check1.methodCheck();
    console.log(check1);
    document.querySelector('.button').onclick = function() {
        p.open();
        document.querySelector('span').onclick = function() {
            p.close();
        }
    };
})();
