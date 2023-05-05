//-------declaring my variabels
document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("btn")) {
    const r = e.target.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.target.style.setProperty("--tran-or", `${x}px ${y}px`);
  }
});

var container = document.querySelector(".container"),
  mybtn = document.querySelector(".btn");

let mydiv = document.querySelector(".wraper");

mybtn.addEventListener("click", function () {
  getdata();
});
async function getdata() {
  try {
    mydiv.innerHTML = "uploadding...";
    myurl = "https://api.quotable.io/random";
    let response = await fetch(myurl);
    let data = await response.json();
    mydiv.innerHTML = `<div class="quote">${data["content"]} </div>
                    <div class="author">${data["author"]} </div>
                    `;
  } catch (error) {
    mydiv.innerHTML = "Opps something is wrong please try again late";
  }
}
