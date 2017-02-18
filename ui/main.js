console.log('Loaded!');

//move the image
var img = document.getElementbyid('madi');
var marginleft = 0;
function moveRight () {
    marginleft = marginleft+1;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};