function switchNightMode() {
  var body = document.body;
  if(body.classList.contains('dark')){
    document.body.classList.remove('dark');
    localStorage.setItem('dark','0');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('dark','1');
  }
}
var xm = document.getElementById("xm");
xm.onclick = switchNightMode;