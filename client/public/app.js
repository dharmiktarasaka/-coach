(function(){
  document.documentElement.classList.add('js');
  var pages=[].slice.call(document.querySelectorAll('.page'));
  var ids=pages.map(function(p){return p.id.replace('pg-','')});
  var nav=document.getElementById('nav');
  var io=null;

  function observe(scope){
    var els=[].slice.call((scope||document).querySelectorAll('.reveal:not(.in)'));
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
    if(!io){io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12})}
    els.forEach(function(e){io.observe(e)});
  }

  function route(first){
    if(!pages.length || pages.length < 27){
      pages=[].slice.call(document.querySelectorAll('.page'));
      ids=pages.map(function(p){return p.id.replace('pg-','')});
    }
    var h=(location.hash||'').replace('#','');
    if(ids.indexOf(h)<0)h='home';
    pages.forEach(function(p){p.classList.toggle('on',p.id==='pg-'+h)});
    var group=h.indexOf('a-')===0?'academy':h.indexOf('b-')===0?'business':h;
    [].forEach.call(document.querySelectorAll('.nav a'),function(a){a.classList.toggle('cur',a.getAttribute('data-r')===group)});
    var targetEl = document.getElementById('pg-'+h);
    var t = targetEl ? targetEl.getAttribute('data-title') : '';
    document.title=(t?t+' | ':'')+'The Narayan Presence';
    if(nav)nav.classList.remove('open');
    if(!first)window.scrollTo(0,0);
    if(targetEl) observe(targetEl);
  }
  window.addEventListener('hashchange',function(){route(false)});
  route(true);

  var burger=document.getElementById('burger');
  if(burger)burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});

  // tab groups (picker, P.A.U.S.E.)
  [].forEach.call(document.querySelectorAll('[data-tabgroup]'),function(g){
    var tabs=[].slice.call(g.querySelectorAll('[role=tab]'));
    var panels=[].slice.call(g.querySelectorAll('[role=tabpanel]'));
    function pick(i){
      tabs.forEach(function(t,k){t.setAttribute('aria-selected',k===i)});
      panels.forEach(function(p,k){p.hidden=k!==i});
      g.dispatchEvent(new CustomEvent('tabchange',{detail:i}));
    }
    tabs.forEach(function(t,i){
      t.addEventListener('click',function(){pick(i)});
      if(g.hasAttribute('data-hover'))t.addEventListener('mouseenter',function(){pick(i)});
      t.addEventListener('keydown',function(e){
        if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();var n=(i+1)%tabs.length;pick(n);tabs[n].focus()}
        if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();var n2=(i-1+tabs.length)%tabs.length;pick(n2);tabs[n2].focus()}
      });
    });
    pick(0);
  });

  // programme filter
  var fils=[].slice.call(document.querySelectorAll('.fil'));
  fils.forEach(function(f){f.addEventListener('click',function(){
    fils.forEach(function(x){x.setAttribute('aria-pressed',x===f)});
    var v=f.getAttribute('data-f');
    [].forEach.call(document.querySelectorAll('#pg-programmes .rw'),function(r){r.style.display=(v==='all'||r.getAttribute('data-pillar')===v)?'':'none'});
  })});

  // demo forms: nothing is sent
  [].forEach.call(document.querySelectorAll('form[data-demo]'),function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var m=f.querySelector('.fmsg');
      if(m)m.textContent='Preview only. In the live site this form sends your enquiry; nothing was sent from here.';
    });
  });
})();
