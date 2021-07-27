function dropdown(val) {
  var y = document.getElementsByClassName('dropdown-toggle');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}

$(function() {
  $('.limited').click(function() {
    $('.limited').not(this).removeClass('active')
    $(this).toggleClass('active')
  })
})