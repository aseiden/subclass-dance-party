describe('colorDancer', function() {

  var colorDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its color change', function() {
    var startColor = colorDancer.$node.css('border-color');
    colorDancer.step();
    var afterColor = colorDancer.$node.css('border-color');
    expect(startColor).not.equal(afterColor);
  });
});
