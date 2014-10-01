$(document).on('ready', function() {
  
/////////////////////////////////////////object classes and variables
// var QuoteLibrary = function(quote) {
// 	this.quotes = [];
// }

var quoteLibrary = [];

var Quote = function(author, quotation) {
	this.author = author;
	this.quotation = quotation;
}

var currentAuthor = '';
var currentQuote = '';
 

//////////////////////////////////////////////events

$(document).on('click', '.user-submit', function(e) {
	e.preventDefault();
	currentAuthor = $('input[name="author"').val();
	currentQuote = $('input[name="quote"').val();
	var newQuote = new Quote(currentAuthor, currentQuote);
	// console.log(newQuote);
	newQuote.render();
	/*$('.quotation-area').append('<div class = "quoteBody"><p>Autor: ' + author + '</p><p>Quotation: "' + quote + '"</p><button class="delete-btn">delete</button></div>');
	$('input[name="author"').val('');
	$('input[name="quote"').val('');
	make a method that does all this*/
	quoteLibrary.push(currentQuote);
	console.log(quoteLibrary);
});

$(document).on('click', '.delete-btn', function(){
	// console.log($(this));
	$(this).closest('.quoteBody').remove();
} );

/////////////////////////////////////////////methods

Quote.prototype.render = function() {
	$('.quotation-area').append('<div class = "quoteBody"><p>Autor: ' + currentAuthor + '</p><p>Quotation: "' + currentQuote + '"</p><button class="delete-btn">delete</button></div>');
	$('input[name="author"').val('');
	$('input[name="quote"').val('');
};

// QuoteLibrary.prototype.pusher = function() {
// 	this.quotes.push(currentQuote);
// }



});