var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.show();
  this.$node.css('border-color', 'rgb(' + this.getRandColor() + ', ' + this.getRandColor() + ', ' + this.getRandColor() + ')');
};

ColorDancer.prototype.getRandColor = function() {
  return Math.floor(Math.random() * 256);
};

var makeColorDancer = function(top, left, timeBetweenSteps) {
  return new ColorDancer(top, left, timeBetweenSteps);
};