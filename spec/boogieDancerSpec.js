describe('boogieDancer', function() {
  
  var boogieDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    boogieDancer = new BoogieDancer(10, 20, timeBetweenSteps);
  });

  it('should have a step function that adjusts its margin', function() {
    var oldTopMargin = boogieDancer.$node.css('marginTop');
    var oldLeftMargin = boogieDancer.$node.css('marginLeft');
    boogieDancer.step();
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    var newTopMargin = boogieDancer.$node.css('marginTop');
    var newLeftMargin = boogieDancer.$node.css('marginLeft');
    expect(oldLeftMargin).not.equal(newLeftMargin);
    expect(oldTopMargin).not.equal(newTopMargin);
  });

})
