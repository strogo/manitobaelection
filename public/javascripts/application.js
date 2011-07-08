(function($){
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children();
      return (items.length)
        ? $(this).html($.shuffle(items))
        : this;
    });
  }

  $.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
})(jQuery);

$(document).ready(function(){
    $('div.politicians').shuffle();

    // Active Admin Tweaks
    p = $('.pagination');

    if (p) {
        target = $('.pagination_information')[0];
        $(p[0]).clone().appendTo(target);
        console.log('what!');
    }

});
