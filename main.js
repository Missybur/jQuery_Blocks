$(document).ready(init);
function init () {
  $('.box').on({
    mouseover: function() {
      $(this).css({background: '#FF0000'});
    },
    mouseleave: function(){
      $(this).css({background: '#000000'})
    },
    click: function(){
      $(this).off('mouseleave');
    }
  });
}