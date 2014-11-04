//javascript to make and control the game board
//using jQuery and Lo-Dash

"use strict";

var tile = 'img/sec1.jpg';
var info = 'some other data';

var game_Board = $('#game-board');
var startButton = $('#play');

startButton.click(playGame);

var matchesLeft = true;

var count = 16;

var attempts = 0;

var successes = 0;

function playGame () {
	$('#game-board').empty();
	var startTime = _.now();
	$('article li').data("stats", {start: startTime, matchSuccess: successes, matchFail: attempts, matchLeft: count});

	var startButton = $('#play');

	var timer;
	timer = startButton.click(onTimer, 1000);
	for (var i = 0; i < 16; i++) {
		//create and configure a new img element
		var newTile = $(document.createElement('img'));

		newTile.attr('src', 'img/tile-back.png');
		newTile.attr('alt', 'tile face down');
		newTile.matched = false;
		newTile.place = i;
		newTile.show = false;
		$('#game-board').data(newTile);
		game_Board.append(newTile);
	};
	
	var allBoardImgs = $('img');
	allBoardImgs.click(function () {
		var newImg = $(this);
		newImg.show = true;
		newImg.attr('src', imgsDouble[newImg.place]);
		newImg.attr('alt', 'tile face up');

		_.forEach(allBoardImgs, function (element, index) {
			var imgSrc = $(element).src;
			if (imgSrc == $(newImg).src) {
				count--;
				successes++;
				newImg.matched = true;
				$("li:fifth").text($('article li').data("stats").matchSuccess);
				$("li:sixth").text($('article li').data("stats").matchLeft);				
			};
		});

		game_Board.append($(this));

		if (newImg.matched = false) {
			attempts++;
			$("li:last").text($('article li').data("stats").matchFail);
			newImg.attr('src', 'img/tile-back.png');
			newImg.show = false;
			game_Board.delay(1000).append(newImg);
		};
	});
}

var allImgs = ['img/tile1.jpg', 'img/tile2.jpg', 'img/tile3.jpg', 'img/tile4.jpg', 'img/tile5.jpg', 
				'img/tile6.jpg', 'img/tile7.jpg', 'img/tile8.jpg', 'img/tile9.jpg', 'img/tile10.jpg',
				'img/tile11.jpg', 'img/tile12.jpg', 'img/tile13.jpg', 'img/tile14.jpg', 'img/tile15.jpg',
				'img/tile16.jpg', 'img/tile17.jpg', 'img/tile18.jpg', 'img/tile19.jpg', 'img/tile20.jpg',
				'img/tile21.jpg', 'img/tile22.jpg', 'img/tile23.jpg', 'img/tile24.jpg', 'img/tile25.jpg',
				'img/tile26.jpg', 'img/tile27.jpg', 'img/tile28.jpg', 'img/tile29.jpg', 'img/tile30.jpg',
				'img/tile31.jpg', 'img/tile32.jpg'];

var shuffledImgs = _.shuffle(allImgs);

var arrayImg = _.first(shuffledImgs, 8);

var imgsDouble = arrayImg;

imgsDouble = $.merge(imgsDouble, arrayImg);

imgsDouble = _.shuffle(imgsDouble);

console.log(imgsDouble);

var allSections = $('section');

function onReady() {
	//allSections.hide();
}

var allNavLinks = $('nav a');

allNavLinks.click(function  () {
	$($(this).attr('href')).fadeIn();
});

$(onReady);

if (matchesLeft == false) {
	alert("You won!");
};

function onTimer () {
	var elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
	console.log(elapsedSeconds);
	$('#time').append(elapsedSeconds);
}

function stopTimer () {
	window.clearInterval(timer);
	$('#game-board').empty();
}
