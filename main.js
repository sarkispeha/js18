$(document).on('ready', function() {
  
var QuoteLibrary = function(quote) {
	this.quotes = [];
}

var Quote = function(author, quotation) {
	this.author = author;
	this.quotation = quotation;
}


$(document).on('click', '.user-submit', function(e) {
	e.preventDefault();
	var author = $('input[name="author"').val();
	var quote = $('input[name="quote"').val();
	// console.log(author);
	// console.log(quote);
	$('.quotation-area').append('<div class = "quoteBody"><p>Autor: ' + author + '</p><p>Quotation: "' + quote + '"</p><button class="delete-btn">delete</button></div>');
	$('input[name="author"').val('');
	$('input[name="quote"').val('');

});

$(document).on('click', '.delete-btn', function(){
	console.log($(this));
	$(this).closest('.quoteBody').remove();
	
} );

});