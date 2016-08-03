$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

  $(".list-group-item").click(function(){
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
    $('.row-offcanvas').toggleClass('active');
  });

});