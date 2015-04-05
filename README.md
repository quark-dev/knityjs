# Knity a tiny Model-View-View Model

Knity is a tiny (3.8 kB minified) JavaScript MVVM (Model-View-View-Model) working with observers like [Knockout](http://knockoutjs.com/). Observable variables are used to update the HTML view automatically with a specific data attribute. Knity also stores array templates in order to improve rendering.

Knity has been created for [Phonon](http://phonon.quarkdev.com), a HTML5 Hybrid Mobile App Framework. The documentation can be found below or on the [Phonon's official website](http://phonon.quarkdev.com/docs/Knity).

# MVVM? How does Knity work?

Let's take a simple example. You have a HTML view and a `String` variable containing a name.
When the user clicks on the "change name" button, you update the variable's value **and** your HTML view.
Knity takes care to render your HTML view whenever observable change. You only need to set HTML bindings and Knity will update your view. An Observable can be seen like a getter and setter.

```javascript
var myObservable = Knity.observable('hello');
var value = myObservable(); // Getter

// value = 'hello'

myObservable('new value'); // Setter
```

# NPM and Gulp compatible

Optional: You can install npm and gulp.

* `npm install` to install all modules
* `gulp` to compile and minimify Knity

# HTML Bindings

## Value

The **value** binding is used to display values in input elements.

```html
<input type="text" data-knity="value: myObservable">
```

## Text

The **text** binding is used to display text in HTML tags.

```html
<input type="text" data-knity="text: myObservable">
```

## Placeholder

The **placeholder** binding is used to set placeholders on input elements.

```html
<input type="text" data-knity="placeholder: myObservable">
```

## Class

The **class** binding is used to change class selectors on HTML tags.

```html
<span class="red" data-knity="class: myObservable"></span>
```

## Foreach

The **foreach** binding is used to display an observable array.
The syntax is inspired by [Mustache](https://mustache.github.io/).

{{$index}} and {{$value}} are reserved words.

* $index: returns the index of the current item
* $value: returns the value of the current item

## Foreach with a simple Array

```html
<ul data-knity="foreach: myArray">
	<li data-kndex="{{$index}}">{{$value}}</li>
</ul>
```

## Foreach with an Array containing objects

```html
<ul data-knity="foreach: myArray">
	<li data-kndex="{{$index}}">
		<span>{{name}}</span> - 
		<span>{{date}}</span>
	</li>
</ul>
```

# How to use Knity

How to use Knity in 3 steps!

## 1. Define a View-Model

A View-Model contains all the observables that you want to display on a HTML View.
For example, the HomeVM will be displayed in the file called home.html.

```javascript
var viewModel = function () {

	var self = this;

	// Create the title observable
	self.title = Knity.observable('hello');

	// self.title(); // access the value
	// self.title('new value'); // update the value

	return self;
};
```

## 2. Define your View

```html
<h1 data-knity="text: title"></h1>
```

## 3. Attach the View-Model with its DOM Element

Attach the View-Model with the DOM element containing data-knity attributes.

```javascript
Knity.attach(viewModel, document);
```

# Supported versions

Knity has been tested on:

* Google Chrome 34.0.1847.116
* Google Chrome 42.0.2311.60
* Firefox 30.00
* Internet Explorer 9


# License

Knity is licensed under the MIT License.
