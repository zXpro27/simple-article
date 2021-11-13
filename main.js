const container = document.getElementById("pembungkus");

container.addEventListener("click", (e)=> {
  if (e.target.className == "btn") {
    e.target.parentElement.style.display = "none";
  }
});


function init() {
  let nama = "aldi";
  function info() {
    console.log(`Halo ${nama}`);
  }
  return info();
}

init();

