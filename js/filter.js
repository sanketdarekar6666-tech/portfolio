function filter(type){
  document.querySelectorAll(".project-card").forEach(card=>{
    if(type==="all" || card.classList.contains(type)){
      card.style.display="block";
    } else {
      card.style.display="none";
    }
  });
}
