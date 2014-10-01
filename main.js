// $(document).on('ready', function() {
  
/////////////////////////////////////////object classes and variables
// var QuoteLibrary = function(quote) {
// 	this.quotes = [];
// }

var quoteLibrary = [];

var Quote = function(author, quotation) {
	this.author = author;
	this.quotation = quotation;
	this.id = _.uniqueId();
}

var currentAuthor = '';
var currentQuote = '';
 

//////////////////////////////////////////////events

$(document).on('click', '.user-submit', function(e) {
	e.preventDefault();
	currentAuthor = $('input[name="author"').val();
	currentQuote = $('input[name="quote"').val();
	$('input[name="author"').val('');
	$('input[name="quote"').val('');
	var newQuote = new Quote(currentAuthor, currentQuote);
	// console.log(newQuote);
	newQuote.render();
	/*$('.quotation-area').append('<div class = "quoteBody"><p>Autor: ' + author + '</p><p>Quotation: "' + quote + '"</p><button class="delete-btn">delete</button></div>');
	$('input[name="author"').val('');
	$('input[name="quote"').val('');
	make a method that does all this*/
	quoteLibrary.push(newQuote);
	// console.log(quoteLibrary);
});

$(document).on('click', '.delete-btn', function(){
	// console.log($(this));
	$(this).closest('.quoteBody').remove();

	var appendedQuote = $(this).closest('.quoteBody').attr('id');

	for(var i = 0; i < quoteLibrary.length; i++){
		if(quoteLibrary[i].id === appendedQuote) {
			quoteLibrary.splice(i, 1);
			break;
		}
	}
});

$(document).on('click', '.authorDOM', function() {
	var authorName = $(this).attr('data-author');
	console.log(authorName);
	var currentAuthorQuotes = [];
	for(var i = 0; i < quoteLibrary.length; i++) {
		// console.log(quoteLibrary[i]);
		if(quoteLibrary[i].author === authorName) {
			// console.log(authorName);
			currentAuthorQuotes.push(quoteLibrary[i].quotation);
			console.log(currentAuthorQuotes);
		}
	}
})

/////////////////////////////////////////////methods

Quote.prototype.render = function() {
	$('.quotation-area').append('<div class = "quoteBody" id="'+this.id+'"><p class="authorDOM" data-author="'+this.author+'">Autor: ' + this.author + '</p><p>Quotation: "' + this.quotation + '"</p><button class="delete-btn">delete</button></div>');	
};




// });