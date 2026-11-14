/* Dot field for the Deutli website (idea: Kokonut UI "Dot Field", MIT, https://kokonutui.com).
   A grid of dots that are pushed away by the pointer and spring back; a click sends a ring through the dots.
   It sleeps when nothing moves and when the section is off screen, and stays still for "reduce motion". */
(function () {
  var SPACING = 28, REACH = 120, PUSH = 26, SPRING = 38, DAMP = 7, COLOR = '167,159,255';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(canvas) {
    var host = canvas.parentElement, ctx = canvas.getContext('2d');
    var w = 0, h = 0, cols = 0, rows = 0, ox, oy, vx, vy, dpr = 1;
    var pointer = { x: -999, y: -999, vx: 0, vy: 0, on: false }, shocks = [];
    var raf = 0, visible = true, last = 0;

    function size() {
      var r = host.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / SPACING) + 2; rows = Math.ceil(h / SPACING) + 2;
      var n = cols * rows;
      ox = new Float32Array(n); oy = new Float32Array(n); vx = new Float32Array(n); vy = new Float32Array(n);
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      var offX = (w - (cols - 1) * SPACING) / 2, offY = (h - (rows - 1) * SPACING) / 2;
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          var k = j * cols + i, x = offX + i * SPACING + ox[k], y = offY + j * SPACING + oy[k];
          var move = Math.min(1, Math.hypot(ox[k], oy[k]) / 18);
          ctx.fillStyle = 'rgba(' + COLOR + ',' + (0.42 + move * 0.55).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(x, y, 1.3 + move * 2.2, 0, 6.2832); ctx.fill();
        }
      }
    }

    function step(dt) {
      var offX = (w - (cols - 1) * SPACING) / 2, offY = (h - (rows - 1) * SPACING) / 2, energy = 0, s, t;
      for (var q = shocks.length - 1; q >= 0; q--) { shocks[q].age += dt; if (shocks[q].age > 1.2) shocks.splice(q, 1); }
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          var k = j * cols + i, bx = offX + i * SPACING, by = offY + j * SPACING, fx = 0, fy = 0;
          if (pointer.on) {
            var dx = bx + ox[k] - pointer.x, dy = by + oy[k] - pointer.y, d = Math.hypot(dx, dy);
            if (d < REACH && d > 0.01) { t = (1 - d / REACH); t *= t; fx += (dx / d) * PUSH * 60 * t + pointer.vx * 0.5 * t; fy += (dy / d) * PUSH * 60 * t + pointer.vy * 0.5 * t; }
          }
          for (s = 0; s < shocks.length; s++) {
            var sx = bx - shocks[s].x, sy = by - shocks[s].y, sd = Math.hypot(sx, sy), ring = shocks[s].age * 520;
            var band = Math.abs(sd - ring);
            if (band < 36 && sd > 0.01) { t = (1 - band / 36) * (1 - shocks[s].age / 1.2); fx += (sx / sd) * 2600 * t; fy += (sy / sd) * 2600 * t; }
          }
          vx[k] += (fx - SPRING * ox[k] - DAMP * vx[k]) * dt; vy[k] += (fy - SPRING * oy[k] - DAMP * vy[k]) * dt;
          ox[k] += vx[k] * dt; oy[k] += vy[k] * dt;
          energy += Math.abs(vx[k]) + Math.abs(vy[k]) + Math.abs(ox[k]) + Math.abs(oy[k]);
        }
      }
      pointer.vx *= 0.8; pointer.vy *= 0.8;
      return energy;
    }

    function frame(now) {
      raf = 0;
      var dt = Math.min(0.033, (now - last) / 1000 || 0.016); last = now;
      var e = step(dt); draw();
      if (visible && (e > 25 || pointer.on || shocks.length)) raf = requestAnimationFrame(frame);
    }
    function wake() { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(frame); } }

    size();
    window.addEventListener('resize', size);
    if (reduce) return;
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) wake(); }).observe(host);
    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect(), nx = e.clientX - r.left, ny = e.clientY - r.top;
      pointer.vx = Math.max(-2600, Math.min(2600, (nx - pointer.x) * 30)); pointer.vy = Math.max(-2600, Math.min(2600, (ny - pointer.y) * 30));
      if (!pointer.on) { pointer.vx = pointer.vy = 0; }
      pointer.x = nx; pointer.y = ny; pointer.on = true; wake();
    });
    host.addEventListener('pointerleave', function () { pointer.on = false; wake(); });
    host.addEventListener('pointerdown', function (e) {
      var r = host.getBoundingClientRect(); shocks.push({ x: e.clientX - r.left, y: e.clientY - r.top, age: 0 }); wake();
    });
  }

  function start() { document.querySelectorAll('canvas[data-dotfield]').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
