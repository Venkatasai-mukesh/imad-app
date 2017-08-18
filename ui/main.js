console.log('Loaded!');

//chnage the text of main-text of div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 15;
    img.style.marginLeft = marginLeft + 'px';
}
       img.onclick = function () {
           var interval = setInterval(moveRight,100);
 };