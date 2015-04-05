'use strict';

window.addEventListener('load', function () {

  var viewModel = function () {

    var self = this;

    // Create the title observable
    self.title = Knity.observable('');

    // Create the item observable
    self.item = Knity.observable('');

    /*
     * Custom function for the item observable
    */
    self.item.submit = function () {

      var value = this().trim();

      if(value.length > 0) {

        var date = new Date();
        var h = date.getHours().toString();
        var m = (date.getMinutes()).toString();
        var s = (date.getSeconds()).toString();

        var d = (h[1]?h:'0'+h[0]) + ':' + (m[1]?m:'0'+m[0]) + ':' + (s[1]?s:'0'+s[0]);
        
        self.allItems( {name: value, date: d } );

        this('');

        self.computeTotal();
      }
    };

    // Create the allItems observable
    self.allItems = Knity.observable([]);

    self.computeTotal = function () {
      self.title('Number of elements (' + self.allItems().length + ')');
    };

    // Set the value of title
    self.computeTotal();

    return self;
  };

  var viewModel = new viewModel();

  // Attach the View Model to the DOM
  Knity.attach(viewModel, document);

  document.querySelector('.submit-btn').addEventListener('click', function (evt) {
    evt.preventDefault();

    // Call the submit function
    viewModel.item.submit();
  });

  /*
   * Listener for click event on "delete" buttons.
  */
  document.addEventListener('click', function (evt) {
    evt.preventDefault();

    var target = evt.target;

    if(target.getAttribute('data-delete')) {

      var index = target.getAttribute('data-index');

      var items = viewModel.allItems();
      items.splice(index, 1);

      viewModel.allItems(items);
      viewModel.computeTotal();
    }
  });
});
