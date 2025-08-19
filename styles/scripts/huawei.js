
// simple scroll-reveal
const io = new IntersectionObserver((ents)=>{
  ents.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-in'); });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
