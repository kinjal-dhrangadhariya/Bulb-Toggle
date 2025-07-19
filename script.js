function turnOn() {
  const bulb = document.getElementById("bulb");
  bulb.classList.remove("bulb-off");
  bulb.classList.add("bulb-on");
}

function turnOff() {
  const bulb = document.getElementById("bulb");
  bulb.classList.remove("bulb-on");
  bulb.classList.add("bulb-off");
}
