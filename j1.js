
let destination = ['Greece', 'Spain', 'France', 'Wales', 'The Netherlands']
let output = document.getElementById("destination")

function roll() {
  maxNum = 5
output.innerHTML = destination[Math.floor(Math.random()*maxNum)]
}