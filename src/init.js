$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('mouseover', '.isCalm', function() {
    $(this).removeClass('isCalm');
    $(this).addClass('isNervous');
  })

  setInterval(function() {
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node.hasClass('isCalm')) {
        for (var k = 0; k < window.dancers.length; k++) {
          if (i !== k) {
            var iTop = Number(window.dancers[i].top) + Number(window.dancers[i].$node.css('marginTop').slice(0, -2));
            var iLeft = Number(window.dancers[i].left) + Number(window.dancers[i].$node.css('marginLeft').slice(0, -2));
            var kTop = Number(window.dancers[k].top) + Number(window.dancers[k].$node.css('marginTop').slice(0, -2));
            var kLeft = Number(window.dancers[k].left) + Number(window.dancers[k].$node.css('marginLeft').slice(0, -2));

            var dv = iTop - kTop;
            var dh = iLeft - kLeft;

            var distanceSquared = (dv * dv) + (dh * dh);
            var distance = Math.sqrt(distanceSquared);

            if (distance < 110) {
              // window.dancers[i].isNervous = true;
              window.dancers[i].$node.removeClass('isCalm');
              window.dancers[i].$node.addClass('isNervous');
            }
          }
        }
      }
    }
  }, 250);
    //iterate over dancers
      //if dancers[i] is nervousDancer class
        //initiate subloop comparing nervous location to all other dancer locations (beside self)
          //if distance is less than x
            //set isNervous boolean to true, add class of isNervous

});

