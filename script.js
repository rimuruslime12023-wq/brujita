const flowers = document.getElementById("flowers");
const card = document.getElementById("card");
const glow = document.getElementById("glow");
const left = document.getElementById("leftSide");
const hint = document.getElementById("hint");

const message = "Brujita Hermosa sé que no es mucho...\n\nTal vez no gasté plata,\nPero esto es muy especial\nPorque lo hice yo con mi esfuerzo 💛\n\nPara ti, mi Madrecita Hermosa,\nte quiero mucho 🌻🌻🌻\ny espero que nunca lo olvides ✨";

flowers.addEventListener("click", () => {

  left.classList.add("move-left");
  glow.classList.add("bright");
  hint.style.opacity = "0";

  setTimeout(() => {
    card.classList.add("show-card");

    let i = 0;
    card.innerHTML = "";

    function write() {
      if (i < message.length) {
        card.innerHTML += message.charAt(i);
        i++;
        setTimeout(write, 35);
      }
    }

    write();

  }, 600);
});

// partículas
for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.opacity = Math.random();

  document.body.appendChild(p);
}