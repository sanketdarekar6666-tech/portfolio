function send(){
  let input=document.getElementById("userInput").value;
  let chatbox=document.getElementById("chatbox");

  if(input.trim()==="") return;

  chatbox.innerHTML+=`<div><b>You:</b> ${input}</div>`;
  chatbox.innerHTML+=`<div><b>Bot:</b> Feature under development.</div>`;

  document.getElementById("userInput").value="";
  chatbox.scrollTop=chatbox.scrollHeight;
}
