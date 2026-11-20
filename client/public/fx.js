(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches;
  var hdr=document.querySelector('.hdr'),nav=document.getElementById('nav'),app=document.getElementById('app');

  // header: transparent over the hero, glass after scrolling
  function hd(){var top=window.scrollY<30&&!(nav&&nav.classList.contains('open'));if(hdr)hdr.classList.toggle('top',top)}
  window.addEventListener('scroll',hd,{passive:true});hd();
  var bg=document.getElementById('burger');if(bg)bg.addEventListener('click',function(){setTimeout(hd,0)});

  // word-by-word headline reveal
  function split(el){
    var i=0;
    (function walk(n){
      [].slice.call(n.childNodes).forEach(function(c){
        if(c.nodeType===3){
          var f=document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function(p){
            if(!p)return;
            if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(' '));return}
            var o=document.createElement('span');o.className='w';
            var s=document.createElement('span');s.textContent=p;s.style.transitionDelay=(i++*75)+'ms';
            o.appendChild(s);f.appendChild(o);
          });
          c.parentNode.replaceChild(f,c);
        }else if(c.nodeType===1&&c.tagName!=='BR')walk(c);
      });
    })(el);
  }
  [].forEach.call(document.querySelectorAll('[data-words]'),function(el){var t=el.textContent;split(el);el.setAttribute('aria-label',t.replace(/\s+/g,' ').trim())});
  function play(){
    var pg=document.querySelector('.page.on');if(!pg)return;
    var els=[].slice.call(pg.querySelectorAll('[data-words]'));
    els.forEach(function(e){e.classList.remove('in')});
    void pg.offsetWidth;
    requestAnimationFrame(function(){requestAnimationFrame(function(){els.forEach(function(e){e.classList.add('in')})})});
  }
  play();
  window.addEventListener('hashchange',function(){
    setTimeout(hd,0);play();
    if(app&&!reduce){app.classList.remove('swap');void app.offsetWidth;app.classList.add('swap')}
    motes.forEach(function(m){setTimeout(m.size,60)});
  });

  // mandala generator
  function mandala(el){
    if(el.querySelector('svg')) return;
    var ns='http://www.w3.org/2000/svg',s=document.createElementNS(ns,'svg');s.setAttribute('viewBox','-100 -100 200 200');
    function add(tag,a,d){var e=document.createElementNS(ns,tag);for(var k in a)e.setAttribute(k,a[k]);e.setAttribute('pathLength','1');e.setAttribute('fill','none');e.setAttribute('stroke','currentColor');e.setAttribute('stroke-width',.28);e.setAttribute('class','dr');e.style.animationDelay=d+'s';s.appendChild(e)}
    [98,80,56,36].forEach(function(r,i){add('circle',{r:r},i*.3)});
    for(var i=0;i<16;i++)add('ellipse',{cx:0,cy:-70,rx:6.5,ry:21,transform:'rotate('+(i*22.5)+')'},.5+i*.07);
    for(var j=0;j<8;j++)add('ellipse',{cx:0,cy:-44,rx:5,ry:15,transform:'rotate('+(j*45+22.5)+')'},1.2+j*.09);
    for(var k=0;k<8;k++)add('path',{d:'M0 -34 Q 5 -20 0 -4 Q -5 -20 0 -34',transform:'rotate('+(k*45)+')'},1.9+k*.08);
    el.appendChild(s);
  }
  [].forEach.call(document.querySelectorAll('.mandala'),mandala);

  // drifting gold motes
  var motes=[];
  if(!reduce)[].forEach.call(document.querySelectorAll('canvas.motes'),function(cv){
    var ctx=cv.getContext('2d'),W=0,H=0,dpr=Math.min(2,window.devicePixelRatio||1),pts=[],mx=-9999,my=-9999,vis=true;
    function size(){var r=cv.getBoundingClientRect();if(!r.width)return;W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);var n=Math.min(110,Math.round(W*H/14000));pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.7+.4,vx:(Math.random()-.5)*.2,vy:-Math.random()*.28-.05,a:Math.random()*.6+.25,t:Math.random()*6})}
    size();window.addEventListener('resize',size);
    motes.push({size:size});
    cv.parentNode.addEventListener('mousemove',function(e){var r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
    if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(cv);
    (function loop(){
      if(vis&&W){
        ctx.clearRect(0,0,W,H);
        for(var i=0;i<pts.length;i++){
          var p=pts[i];p.x+=p.vx;p.y+=p.vy;p.t+=.02;
          if(p.y<-6){p.y=H+6;p.x=Math.random()*W}if(p.x<-6)p.x=W+6;if(p.x>W+6)p.x=-6;
          var dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy)||1;
          if(d<130){p.x+=dx/d*(130-d)*.025;p.y+=dy/d*(130-d)*.025}
          var tw=.55+.45*Math.sin(p.t);
          ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.2832);
          ctx.fillStyle='rgba(236,196,118,'+(p.a*tw)+')';ctx.shadowColor='rgba(217,170,85,.9)';ctx.shadowBlur=9;ctx.fill();
        }
      }
      requestAnimationFrame(loop);
    })();
  });

  // pointer effects
  document.addEventListener('mousemove',function(e){
    var t=e.target.closest&&e.target.closest('.card,.tile,.box,.door,.facts,.rcard,.tabpanel');
    if(t){var r=t.getBoundingClientRect();t.style.setProperty('--mx',(e.clientX-r.left)+'px');t.style.setProperty('--my',(e.clientY-r.top)+'px')}
    var h=e.target.closest&&e.target.closest('.hero,.phero,.cta');
    if(h){var r2=h.getBoundingClientRect();h.style.setProperty('--hx',(e.clientX-r2.left)+'px');h.style.setProperty('--hy',(e.clientY-r2.top)+'px');
      h.style.setProperty('--px',((e.clientX-r2.left)/r2.width-.5).toFixed(3));h.style.setProperty('--py',((e.clientY-r2.top)/r2.height-.5).toFixed(3))}
  },{passive:true});

  if(fine&&!reduce){
    [].forEach.call(document.querySelectorAll('[data-tilt]'),function(el){
      el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(900px) rotateY('+(x*9)+'deg) rotateX('+(-y*9)+'deg) translateY(-6px)'});
      el.addEventListener('mouseleave',function(){el.style.transform=''});
    });
    [].forEach.call(document.querySelectorAll('.btn'),function(b){
      b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.16)+'px,'+((e.clientY-r.top-r.height/2)*.26)+'px)'});
      b.addEventListener('mouseleave',function(){b.style.transform=''});
    });
  }

  // scroll-lit statement
  var st=document.querySelector('.statement');
  if(st&&!reduce){
    var sws=[];
    (function walk(n){[].slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(' '));return}var s=document.createElement('span');s.className='sw';s.textContent=p;sws.push(s);f.appendChild(s)});c.parentNode.replaceChild(f,c)}
      else if(c.nodeType===1)walk(c)})})(st.querySelector('p.big'));
    var upd=function(){
      var pgHome = document.getElementById('pg-home');
      if(!pgHome || !pgHome.classList.contains('on'))return;
      var r=st.getBoundingClientRect(),vh=window.innerHeight;
      var p=(vh*.9-r.top)/(r.height*.9+vh*.3);p=Math.max(0,Math.min(1,p));
      var n=sws.length;sws.forEach(function(w,i){w.classList.toggle('lit',(i+1)/n<=p*1.12)});
    };
    window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
  }

  // count-up numbers
  [].forEach.call(document.querySelectorAll('[data-count]'),function(el){
    var end=+el.getAttribute('data-count'),done=false;
    if(reduce||!('IntersectionObserver' in window))return;
    new IntersectionObserver(function(es,o){
      if(es[0].isIntersecting&&!done){done=true;o.disconnect();var t0=performance.now();
        (function f(t){var k=Math.min(1,(t-t0)/1500),e=1-Math.pow(1-k,3);el.textContent=Math.round(end*e);if(k<1)requestAnimationFrame(f)})(t0)}
    },{threshold:.6}).observe(el);
  });

  // draggable programme rail
  var rail=document.getElementById('rail');
  if(rail){
    var down=false,sx=0,sl=0,moved=0;
    [].forEach.call(rail.querySelectorAll('a'),function(a){a.setAttribute('draggable','false')});
    rail.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'){down=true;sx=e.clientX;sl=rail.scrollLeft;moved=0;rail.classList.add('drag')}});
    window.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-sx;moved=Math.max(moved,Math.abs(dx));rail.scrollLeft=sl-dx});
    window.addEventListener('pointerup',function(){down=false;rail.classList.remove('drag')});
    rail.addEventListener('click',function(e){if(moved>6){e.preventDefault();e.stopPropagation();moved=0}},true);
    var pv=document.getElementById('rprev'),nx=document.getElementById('rnext');
    if(pv)pv.addEventListener('click',function(){rail.scrollBy({left:-380,behavior:'smooth'})});
    if(nx)nx.addEventListener('click',function(){rail.scrollBy({left:380,behavior:'smooth'})});
  }

  // P.A.U.S.E. ring follows the selected step
  var pz=document.querySelector('.pz');
  if(pz){
    var prog=pz.querySelector('.prog'),nds=[].slice.call(pz.querySelectorAll('.ring5 .nd'));
    pz.addEventListener('tabchange',function(e){var i=e.detail;if(prog)prog.style.strokeDashoffset=402.1*(1-i/5);nds.forEach(function(n,k){n.classList.toggle('on',k===i)})});
    nds.forEach(function(n,k){n.classList.toggle('on',k===0)});
  }
})();
(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('[data-quotes]'),function(box){
    var items=[].slice.call(box.querySelectorAll('.qitem')),dots=[].slice.call(box.querySelectorAll('.qdots button')),cur=0,timer=null;
    function show(i){cur=i;items.forEach(function(q,k){q.hidden=k!==i;if(k===i){q.style.animation='none';void q.offsetWidth;q.style.animation=''}});dots.forEach(function(d,k){d.setAttribute('aria-current',k===i)})}
    function next(){show((cur+1)%items.length)}
    function start(){if(reduce)return;stop();timer=setInterval(function(){
      var ph = document.getElementById('pg-home'), pa = document.getElementById('pg-about');
      if((ph&&ph.classList.contains('on'))||(pa&&pa.classList.contains('on')))next()
    },6500)}
    function stop(){if(timer){clearInterval(timer);timer=null}}
    dots.forEach(function(d,k){d.addEventListener('click',function(){show(k);start()})});
    box.addEventListener('mouseenter',stop);box.addEventListener('mouseleave',start);
    start();
  });
})();

/* ===== 3D floating objects + section backgrounds ===== */
(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches;
  function gy(){return '<div class="o3 gy" style="--s:var(--S);--t:30s"><i class="ring3"></i><i class="ring3"></i><i class="ring3"></i></div>'}
  function sph(c){return '<div class="sph '+(c||'')+'" style="--s:var(--S)"></div>'}
  function cube(){return '<div class="o3 cube" style="--s:var(--S);--t:34s"><i class="fa"></i><i class="fa"></i><i class="fa"></i><i class="fa"></i><i class="fa"></i><i class="fa"></i></div>'}
  function lot(){var p='';for(var i=0;i<12;i++)p+='<ellipse cx="100" cy="46" rx="15" ry="42" transform="rotate('+(i*30)+' 100 100)" fill="rgba(217,170,85,.10)" stroke="rgba(217,170,85,.7)" stroke-width="1"/>';
    for(i=0;i<8;i++)p+='<ellipse cx="100" cy="64" rx="11" ry="28" transform="rotate('+(i*45+22)+' 100 100)" fill="rgba(217,170,85,.14)" stroke="rgba(217,170,85,.8)" stroke-width="1"/>';
    return '<div class="lot" style="--s:var(--S)"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="96" fill="none" stroke="rgba(217,170,85,.35)"/>'+p+'<circle cx="100" cy="100" r="8" fill="rgba(217,170,85,.8)"/></svg></div>'}
  var kinds={gy:gy,sph:sph,cube:cube,lot:lot};
  // each recipe: [kind, size px, css position, depth, extra class]
  var R=[
   [['gy',210,'right:1%;top:-40px',18],['sph',86,'left:1%;bottom:-24px',30,'hm']],
   [['cube',110,'left:0;top:-30px',22],['lot',260,'right:-3%;bottom:-60px',12,'hm']],
   [['sph',120,'right:2%;top:-24px',34],['gy',150,'left:0;bottom:-40px',16,'hm']],
   [['lot',280,'left:-4%;top:-50px',12],['cube',96,'right:1%;bottom:-30px',26,'hm']],
   [['gy',180,'left:0;top:-40px',20],['sph',100,'right:1%;bottom:-24px',30,'hm']]
  ];
  var vis=[];
  function decorate(sec,idx){
    if(sec.querySelector(':scope>.bgfx'))return;
    var dark=sec.classList.contains('dark');
    var bg=document.createElement('div');bg.className='bgfx';bg.setAttribute('aria-hidden','true');
    bg.innerHTML='<i class="arc"></i><i class="arc a2"></i><i class="floor"></i>';
    sec.insertBefore(bg,sec.firstChild);
    var small=sec.classList.contains('phero')||sec.classList.contains('tight')||sec.classList.contains('cta');
    var rec=R[idx%R.length].slice(0,small?1:2);
    var f=document.createElement('div');f.className='dec3';f.setAttribute('aria-hidden','true');
    rec.forEach(function(o,i){
      var w=document.createElement('div');w.className='o3w '+(o[4]||'');
      w.style.cssText=o[2]+';--S:'+(small?Math.round(o[1]*.75):o[1])+'px;--d:'+o[3];
      var html=kinds[o[0]](dark&&o[0]==='sph'?'i':'');
      w.innerHTML=html;f.appendChild(w);
    });
    sec.insertBefore(f,bg.nextSibling);
    sec._f=f;vis.push(sec);
  }
  [].forEach.call(document.querySelectorAll('.page'),function(pg){
    [].forEach.call(pg.querySelectorAll(':scope>section'),function(s,i){decorate(s,i+pg.id.length)});
  });
  if(reduce)return;
  var live=new Set();
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.target._f) e.target._f.classList.toggle('on3',e.isIntersecting);
      if(e.isIntersecting)live.add(e.target);else live.delete(e.target);
    })},{rootMargin:'80px'});
    vis.forEach(function(s){io.observe(s)});
  }else vis.forEach(function(s){if(s._f)s._f.classList.add('on3');live.add(s)});
  var tick=false;
  function par(){tick=false;var H=innerHeight;live.forEach(function(s){
    if(!s._f) return;
    var r=s.getBoundingClientRect(),p=(r.top+r.height/2-H/2)/H;
    [].forEach.call(s._f.children,function(w){w.style.setProperty('--py',(-p*(parseFloat(w.style.getPropertyValue('--d'))||10)*3).toFixed(1))});
  })}
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(par)}},{passive:true});
  addEventListener('hashchange',function(){setTimeout(par,60)});
  par();
  if(fine)addEventListener('pointermove',function(e){
    var r=document.documentElement.style;
    r.setProperty('--mx',((e.clientX/innerWidth-.5)*2).toFixed(3));r.setProperty('--my',((e.clientY/innerHeight-.5)*2).toFixed(3));
  },{passive:true});
})();
