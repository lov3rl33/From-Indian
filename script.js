const startbutton = document.getElementById("startbutton");
const heartcontainer = document.getElementById("heartcontainer");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const imagecontainer = document.getElementById("imagecontainer");

startbutton.onclick = () => {
   heartcontainer.style.display = "none";
   envelope.style.display = "block";
};

envelope.onclick = () => {
   letter.style.display = "block";
};

letter.onclick = () => {
   if (envelope.parentNode) {
    envelope.parentNode.removeChild(envelope);
  }
  imagecontainer.style.display = "block";
};
