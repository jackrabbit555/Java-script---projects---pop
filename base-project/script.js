const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function drawWave() {
  ctx.beginPath();

  // Create the path for the wave.
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, Math.sin(i / 10) * 50 + canvas.height / 2);
  }

  ctx.stroke();
}

// Animate the wave.
requestAnimationFrame(drawWave);
