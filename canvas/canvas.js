(function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.rect(0, 0, 150, 150);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.rect(205, 5, 290, 140);
  ctx.fillStyle = 'gray';
  ctx.fill();
  ctx.stroke();
})();
