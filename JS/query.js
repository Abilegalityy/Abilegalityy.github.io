(function ($) {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
});

$('#delete').click(function (e) {
    $("#myIntro").addClass('animate');
    $("#poemBtn").addClass('animate');
    $("#vid-click").addClass('animate');
});

$('#myIntro').on('transitionend', function(e){
    $(e.target).remove()
});

$('#poemBtn').on('transitionend', function(e){
    $(e.target).remove()
});

$('#vid-click').on('transitionend', function(e){
    $(e.target).remove()
});
