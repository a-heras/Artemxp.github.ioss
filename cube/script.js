$(function() {

  $('.cube').on('mousedown', function (){
            $(document).on('mousemove', function (e){
          $('.cube').css({
              transform: 'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
          });
      });
  });


});
