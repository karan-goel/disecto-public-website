var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwuIari6E7HEizRPIS_L2fNySAFQxasiLfig-pwXyYlEpy3jlz3HhSammwUbq3Ehd696w/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})