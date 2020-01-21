var layer1 = document.getElementById('earth')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.transform = "rotate("+window.pageYOffset+"deg)";
    // layer1.style.transform = "rotate(-"+window.pageYOffset+"deg)";
})

var layer2 = document.getElementById('cloud1')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (950 + scroll / 20) + 'px';
    layer2.style.left = (1200 - scroll / 3) + 'px';
})

var layer3 = document.getElementById('cloud2')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer3.style.width = (950 + scroll / 20) + 'px';
    layer3.style.left = (-400 + scroll / 3) + 'px';
})

var layer4 = document.getElementById('cloud3')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer4.style.width = (950 + scroll / 20) + 'px';
    layer4.style.left = (1000 - scroll / 4) + 'px';
})

var layer5 = document.getElementById('cloud4')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer5.style.width = (1400 + scroll / 20) + 'px';
    layer5.style.right = (1200 - scroll / 3) + 'px';
})

var layer6 = document.getElementById('cloud5')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer6.style.width = (1500 + scroll / 30) + 'px';
    layer6.style.left = (1400 - scroll / 1) + 'px';
})


// mouseMove
function taiwan(e) {
    var valueX = (e.pageX * 1 / 50);
    var valueY = (e.pageY * 1/200);
    this.style.backgroundPositionX = valueX + "px"
    this.style.backgroundPositionY = valueY + "px"
  }
  window.onload = function() {
    var im = document.getElementById("taiwan");
    if (im) {
      im.addEventListener("mousemove",taiwan,false);
    }  
  }