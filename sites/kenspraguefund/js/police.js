setInterval(function(){
var container = document.getElementById('home-slider');
var tmp = container.innerHTML;
container.innerHTML= tmp;
}, 27000 // length of the whole show in milliseconds
);