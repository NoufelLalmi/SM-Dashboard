const toggle = document.getElementById('toggle');
var body = document.getElementById('body');

toggle.addEventListener("click" , myFunc);
function myFunc() {
    if (toggle.checked == false)
      body.setAttribute('class', 'dark')
    else body.setAttribute('class', ' ')
  }
