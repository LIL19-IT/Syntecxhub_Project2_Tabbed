const nav=document.getElementById('tabNav');
const btns=nav.querySelectorAll('.tab-btn');
let barsOn=false;

function switchTab(id){
  btns.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false');});
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  const btn=nav.querySelector(`[data-tab="${id}"]`);
  const panel=document.getElementById(`panel-${id}`);
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  panel.classList.add('active');
  if(id==='reviews'&&!barsOn){
    barsOn=true;
    setTimeout(()=>{
      document.querySelectorAll('.b-fill').forEach(b=>{b.style.width=b.dataset.w+'%';});
    },160);
  }
}

btns.forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));

nav.addEventListener('keydown',e=>{
  const cur=[...btns].indexOf(document.querySelector('.tab-btn.active'));
  if(e.key==='ArrowRight'){const n=(cur+1)%btns.length;btns[n].click();btns[n].focus();}
  if(e.key==='ArrowLeft'){const p=(cur-1+btns.length)%btns.length;btns[p].click();btns[p].focus();}
});
