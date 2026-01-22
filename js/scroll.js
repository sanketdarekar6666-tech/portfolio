window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card,.project-card,.dash-card").forEach(el=>{
    let pos=el.getBoundingClientRect().top;
    if(pos<window.innerHeight-120){
      el.style.opacity=1;
      el.style.transform="translateY(0)";
    }
  });
});
