var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order:';

var welcom = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById( elementld: 'greeting');
el.textContent = welcome;

var elSign = document.getElementById( elementld: 'userSign');
elSign.textContent = sign;

var elTiles = document.getElementById( elementld: 'tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById( elementld: 'subTotal');
elSubTotal.textContent = '$' = subTotal;

var elShipping = document.getElementById( elementld: 'shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById( elementld: 'grandTotal');
elGrandTotal.textContent = '$' + grandTotal;