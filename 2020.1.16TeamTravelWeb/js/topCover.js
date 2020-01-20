var layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (50 + scroll / 5) + '%';
    layer1.style.left = (-185 + scroll / 1) + 'px';
})

var layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (50 + scroll / 5) + '%';
    layer2.style.right = (-600 + scroll / 3) + 'px';
})

var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    text.style.top = -scroll / 15 + '%';
})

var title = document.getElementById('title')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    title.style.top = -scroll / 15 + '%';
})