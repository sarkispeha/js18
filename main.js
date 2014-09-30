$(document).on('ready', function() {
  

$(document).on('click', '.user-submit', function(e) {
	e.preventDefault();
	var author = $('input[name="author"').val();
	var quote = $('input[name="quote"').val();
	console.log(author);
	console.log(quote);
	$('.quotation-area').append('<p>' + author + '</p><p>' + quote + '</p>');
	$('input[name="author"').val('');
	$('input[name="quote"').val('');

});

});