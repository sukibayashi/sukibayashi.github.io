var layer1 = document.getElementById('earth')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.transform = "rotate("+window.pageYOffset+"deg)";
    // layer1.style.transform = "rotate(-"+window.pageYOffset+"deg)";
})