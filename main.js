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

//event handler that creates quotes and appends them to DOM
$(document).on('click', '.authorDOM', function() {
	var authorName = $(this).attr('data-author');
	// console.log(authorName);
	var currentAuthorQuotes = [];
	for(var i = 0; i < quoteLibrary.length; i++) {
		// console.log(quoteLibrary[i]);
		if(quoteLibrary[i].author === authorName) {
			// console.log(authorName);
			currentAuthorQuotes.push(quoteLibrary[i].quotation);
			// console.log(currentAuthorQuotes);
		}
	}
	currentAuthorQuotes = currentAuthorQuotes.join('<br>');

//Lighbox popup with all quotes from selected author
	$('.lightbox-area').html('<div class="lightbox">author: ' + authorName + '<br>Quotes:<br>' + currentAuthorQuotes + '</div>' + '<div class="lightbox-close"><button type="button">close</button></div>');
	$('.lightbox-area').show();

	$('.lightbox-close').on('click', function() {
		console.log('works');
		$('.lightbox-area').hide();
	})
	
})

// $('.fa').on('mouseover', function() {
// 	console.log('works')
// 	$(this).removeClass('fa-star-o').addClass('fa-star');
// 	console.log('off')
// 	// $(this).removeClass('fa fa-star-o').addClass('fa fa-star');
// })




/////////////////////////////////////////////methods

Quote.prototype.render = function() {
	$('.quotation-area').append('<div class = "quoteBody" id="'+this.id+'"><p class="authorDOM" data-author="'+this.author+'">Autor: ' + this.author + '</p><p>Quotation: "' + this.quotation + '"</p><button class="delete-btn">delete</button></div><div class="rating-area">Rating<ul><li><i class="fa fa-star-o" id="star1"></i></li><li><i class="fa fa-star-o" id="star2"></i></li><li><i class="fa fa-star-o" id="star3"></i></li><li><i class="fa fa-star-o" id="star4"></i></li><li><i class="fa fa-star-o" id="star5"></i></li></ul></div>');
	
	//mouse hover
	$('.fa').on('mouseover', function() {
		$(this).removeClass('fa-star-o').addClass('fa-star');
	})
	$('.fa').on('mouseout', function() {
		$(this).removeClass('fa-star').addClass('fa-star-o');
	})

	//keeping stars hilighted
	$(document).on('click', 'i', function(){
		console.log('works');
		console.log(this);
		
})

};




// });