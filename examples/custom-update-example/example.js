/*
 * In this example, we will implement a custom function when the title's value changes.
 * Each time the value changes, we will show the date in another DOM element.
*/

'use strict';

window.addEventListener('load', function () {

  /*
   * First step, define a View Model
  */
  var viewModel = function () {

    var self = this;

    /*
     * Our custom update function
    */
    var customUpdate = function (observable, value) {

      var p = document.querySelector('.date');

      var date = new Date();
      var h = date.getHours().toString();
      var m = (date.getMinutes()).toString();
      var s = (date.getSeconds()).toString();

      var d = (h[1]?h:'0'+h[0]) + ':' + (m[1]?m:'0'+m[0]) + ':' + (s[1]?s:'0'+s[0]);

      p.innerHTML = d + ' => ' + 'the value of ' + observable + ' is ' + value;
    };

    // Create the title observable
    self.title = Knity.observable();

    // Use the onUpdate function to define a custom listener
    self.title('').onUpdate(customUpdate);

    return self;
  };

  var viewModel = new viewModel();

  // Attach the View Model to the DOM
  Knity.attach(viewModel, document);

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