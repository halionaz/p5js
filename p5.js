function setup() {
    createCanvas(1000, 500);
    fill('crimson');
    noStroke();
}
let count = 0
function draw() {
    for(var i = 0; i < 5; i++){
        circle(random(1000),random(1000),20);
    }
    let r = random(255); // r is a random number between 0 - 255
    let g = random(255); // g is a random number betwen 100 - 200
    let b = random(255); // b is a random number between 0 - 100
    fill(r,g,b)
}