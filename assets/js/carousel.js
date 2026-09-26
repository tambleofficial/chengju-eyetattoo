
(function(){
  function initTopCarousel(){
    var root = document.querySelector('[data-top-carousel]');
    if(!root) return;
    var track = root.querySelector('[data-carousel-track]');
    var items = Array.prototype.slice.call(track.querySelectorAll('.top-carousel-card'));
    var prev = root.querySelector('[data-carousel-prev]');
    var next = root.querySelector('[data-carousel-next]');
    var count = root.querySelector('[data-carousel-count]');
    if(!track || !items.length) return;

    function getStep(){
      if(items.length < 2) return items[0].getBoundingClientRect().width;
      var a = items[0].getBoundingClientRect();
      var b = items[1].getBoundingClientRect();
      return Math.max(1, b.left - a.left);
    }
    function getIndex(){
      var step = getStep();
      return Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / step)));
    }
    function renderCount(){
      var idx = getIndex() + 1;
      count.textContent = String(idx).padStart(2,'0') + ' / ' + String(items.length).padStart(2,'0');
    }
    function scrollByDir(dir){
      track.scrollBy({left: getStep() * dir, behavior:'smooth'});
    }

    if(prev) prev.addEventListener('click', function(){ scrollByDir(-1); });
    if(next) next.addEventListener('click', function(){ scrollByDir(1); });
    track.addEventListener('scroll', function(){ window.requestAnimationFrame(renderCount); }, {passive:true});
    window.addEventListener('resize', renderCount);
    renderCount();
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initTopCarousel, {once:true});
  } else {
    initTopCarousel();
  }
})();
