var BoogieDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BoogieDancer.prototype = Object.create(Dancer.prototype);
BoogieDancer.prototype.constructor = BoogieDancer;

BoogieDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.show();
  this.$node.animate({
    left: '+=' + (this.shift() + this.left),
    top: '+=' + (this.shift() + this.top)
  }, this.timeBetweenSteps);
};

BoogieDancer.prototype.shift = function() {
  return Math.floor((Math.random() * 50) - (Math.random() * 50));
};

var makeBoogieDancer = function(top, left, timeBetweenSteps) {
  return new BoogieDancer(top, left, timeBetweenSteps);
};