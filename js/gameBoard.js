//javascript code
//with jQuery!! :D
//javascript to make and control the game board

"use strict";

var tile = 'img/sec1.jpg';
var info = 'some other data';

var game_Board = $('#game-board');

//create and configure a new img element
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/tile-back.jpg');
newTile.attr('alt', 'photo of nature');

game_Board.append(newTile);

var allSections = $('section');

function onReady() {
	allSections.hide();
}

var allNavLinks = $('nav a');

allNavLinks.click(function  () {
	$($(this).attr('href')).fadeIn();
});

$(onReady);