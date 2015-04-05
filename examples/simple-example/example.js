/*
 * In this example, we want to update the title every second during 10 seconds.
*/
'use strict';

window.addEventListener('load', function () {

  /*
   * First step, define a View Model
  */
  var viewModel = function () {

    var self = this;

    // Create the title observable
    self.title = Bindy.observable('');

    return self;
  };

  var viewModel = new viewModel();
  
  // Attach the View Model with the DOM
  Bindy.attach(viewModel, document);

  var times = 1;

  var eachSecond = window.setInterval(function () {

    // Update the observable each second, the rendering is automatic!
    viewModel.title('Number of executions: ' + times);

    times++;

    if(times === 11) {
      window.clearInterval(eachSecond);
    }

  }, 1000);
});