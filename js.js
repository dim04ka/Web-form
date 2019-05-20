  //paralax
  function paralax(e) {
    var layer1 = document.querySelector(".layet-1");
    var layer2 = document.querySelector(".layet-2");
    layer1.style.transform = `translateX(${e.clientX*10/1000}px)`
    layer2.style.transform = `translateX(${e.clientX*20/1000}px)`
    layer2.style.transform = `translateY(${e.clientY*20/1000}px)`
  }
  document.addEventListener('mousemove', paralax);

  function showBlock(){
    var div = document.querySelector(".out");
    console.log(div.children);
      if (div.children.length == 0) {
        div.style.cssText = 'display: none';
      } else {
        div.style.cssText = 'display: block';
      }
  }
  showBlock();

  var arrBtn = document.querySelectorAll('button');
  console.log(arrBtn)
  for (i=0; i<arrBtn.length; i++) {
    arrBtn[i].addEventListener('click',showBlock);
  }
