var NervousDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('isCalm');
  // this.isNervous = false;
}

NervousDancer.prototype = Object.create(Dancer.prototype);
NervousDancer.prototype.constructor = NervousDancer;

NervousDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  var thisDancer = this;

  if (this.$node.hasClass('isNervous')) {
    this.$node.animate({
      marginLeft: '+=' + this.shift(),
      marginTop: '+=' + this.shift()
    }, this.timeBetweenSteps);

    setTimeout(function(){
      // thisDancer.isNervous = false;
      thisDancer.$node.removeClass('isNervous');
      thisDancer.$node.addClass('isCalm');
    }, thisDancer.timeBetweenSteps)

  } else {
    this.$node.animate({
      marginTop: '-=' + 15,
    }, (this.timeBetweenSteps / 2));

    setTimeout(function() {
      thisDancer.$node.animate(
      {
        marginTop: '+=' + 15,
      }, (thisDancer.timeBetweenSteps / 2));
    }, thisDancer.timeBetweenSteps / 2);
  }
}

var makeNervousDancer = function(top, left, timeBetweenSteps) {
  return new NervousDancer(top, left, timeBetweenSteps);
}

NervousDancer.prototype.shift = function() {
  return Math.floor((Math.random() * 200) - (Math.random() * 200));
};