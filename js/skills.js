document.querySelectorAll(".bar").forEach(bar=>{
  let level = bar.getAttribute("data-level");
  bar.style.width = level + "%";
});
