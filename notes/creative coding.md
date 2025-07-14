```js
let t = 0;

function setup() {
  createCanvas(400, 400);
  stroke(400, 66);
}

function draw() {
  background(9);  // Clear canvas each frame to prevent trails
  t += PI / 20;
  
  for (let i = 10000; i--;) {
    let x = i % 200;
    let y = i / 43;
    
    let k = 5 * cos(x / 14) * cos(y / 30);
    let e = y / 8 - 13;
    let d = (sqrt(k * k + e * e)) ** 2 / 59 + 4;
    
    let q = 60 - 3 * sin(atan2(k, e) * e) + k * (3 + 4 / d * sin(d * d - t * 2));
    let c = d / 2 + e / 99 - t / 18;
    
    let px = q * sin(c) + 200;
    let py = (q + d * 9) * cos(c) + 200;
    
    point(px, py);
  }
}
```

