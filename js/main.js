const obs = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:0.08});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

function submitForm(){
  const n=document.getElementById('fname').value.trim();
  const tel=document.getElementById('ftel').value.trim();
  const e=document.getElementById('femail').value.trim();
  const t=document.getElementById('ftype').value;
  const m=document.getElementById('fmsg').value.trim();
  if(!n||!tel||!e||!t||!m){alert('必須項目（*）をすべてご入力ください。');return;}
  const subject=encodeURIComponent('【洞南肆地区山笠競演会】お問い合わせ：'+t);
  const body=encodeURIComponent(
    'お名前：'+n+'\n'+
    'メールアドレス：'+e+'\n'+
    '電話番号：'+tel+'\n'+
    'お問い合わせ種別：'+t+'\n\n'+
    'お問い合わせ内容：\n'+m
  );
  window.location.href='mailto:info@dounan4.com?subject='+subject+'&body='+body;
  document.getElementById('contactForm').style.display='none';
  document.getElementById('formSuccess').classList.add('show');
}

// Hero video: load via direct file (was inline base64 ~3.5MB)
(function(){
  var v = document.getElementById('heroVideo');
  if (!v) return;
  v.src = 'img/hero-video.mp4';
  v.load();
  v.play().catch(function(){});
})();

// Hamburger menu
var ham = document.getElementById('hamburger');
var mob = document.getElementById('mobileMenu');
function closeMenu(){
  ham.classList.remove('open');
  mob.classList.remove('open');
  document.body.style.overflow='';
}
if(ham){
  ham.addEventListener('click',function(){
    var isOpen = ham.classList.toggle('open');
    mob.classList.toggle('open',isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// Scroll to top button
var stb = document.getElementById('scrollTopBtn');
window.addEventListener('scroll',function(){
  if(stb) stb.classList.toggle('visible', window.scrollY > 400);
},{passive:true});
