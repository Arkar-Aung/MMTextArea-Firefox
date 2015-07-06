var zg = document.getElementById("zg");
var uni = document.getElementById("uni");

if (zg.addEventListener) {
  zg.addEventListener('input', function() {
    uni.value = Rabbit.zg2uni(zg.value);	
  }, false);
}

if (uni.addEventListener) {
  uni.addEventListener('input', function() {
    zg.value = Rabbit.uni2zg(uni.value);	
  }, false);
}
