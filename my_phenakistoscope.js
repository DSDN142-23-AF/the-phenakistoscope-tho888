const SLICE_COUNT = 11;

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("kiwi", "png", 11);
  pScope.load_image_sequence("stars", "png", 11);
}

function setup_layers(pScope) {

  new PLayer(null, 5, 32, 51);

  var layer1 = new PLayer(earth);
  layer1.mode(RING);
  layer1.set_boundary(0, 1000);

  var layer2 = new PLayer(grass);
  layer2.mode(RING);
  layer2.set_boundary(475, 500);

  var layer3 = new PLayer(bug);
  layer3.mode(SWIRL(2));
  layer3.set_boundary(100, 425);

  var layer4 = new PLayer(kiwi);
  layer4.mode(RING);
  layer4.set_boundary(0, 1000);

  var layer5 = new PLayer(stars);
  layer5.mode(RING);
  layer5.set_boundary(0, 1000);

  var layer6 = new PLayer(outerRing);
  layer6.mode(RING);
  layer6.set_boundary(965, 1000);
}

function earth(x, y, animation, pScope) {
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(35, 15, 0)
  arc(x, y, 1000, 1000, backgroundArcStart, backgroundArcEnd);
}

function grass(x, y, animation, pScope) {
  pScope.fill_background(45, 180, 0, 100);
}

function bug(x, y, animation, pScope) {
  scale(animation.frame);

  var bugX = animation.wave(2) * -100;
  var bugR = animation.wave(2) * 35;

  translate(bugX + 110, 0);
  rotate(bugR + 180);
  stroke(230, 89, 98);
  strokeWeight(5)
  fill(255, 132, 137);

  beginShape();
    curveVertex(10, 0);
    curveVertex(20, 10);
    curveVertex(20, 30);
    curveVertex(40, 50);
    curveVertex(40, 60);
    curveVertex(20, 80);
    curveVertex(20, 90);
    curveVertex(40, 110);
    curveVertex(30, 120);
    curveVertex(20, 110);
    curveVertex(0, 90);
    curveVertex(0, 80);
    curveVertex(20, 60);
    curveVertex(20, 50);
    curveVertex(0, 30);
    curveVertex(0, 10);
  endShape(CLOSE);
}

function kiwi(x, y, animation, pScope) {
  scale(1.2);
  pScope.draw_image_from_sequence("kiwi", 0, -523, animation.frame);
}

function stars(x, y, animation, pScope) {
  scale(1);
  pScope.draw_image_from_sequence("stars", 0, -820, animation.frame);
}

function outerRing(x, y, animation, pScope) {
  pScope.fill_background(0, 75, 130);
}