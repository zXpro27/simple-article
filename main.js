const container = document.getElementById("pembungkus");

container.addEventListener("click", (e)=> {
  if (e.target.className == "btn") {
    e.target.parentElement.style.display = "none";
  }
});


