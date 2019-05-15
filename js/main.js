function burger(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('menu');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 50vh 100vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
  }
  
  function quit(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('menu');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
  }

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });