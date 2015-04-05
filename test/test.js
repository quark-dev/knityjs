var jsdom = require('mocha-jsdom');
var assert = require('assert');
var expect = require('chai').expect;

var Knity = require('../src/knity.js');

describe('Knity tests', function() {

	jsdom();

	describe('#attach', function() {

		it('should throw Error when we do not pass any arguments', function() {

			expect(function() {
				(Knity.attach());
			}).to.throw('The view model must be an object');
		});

		it('should throw Error when we do not pass a valid View-Model', function() {

			expect(function() {
				(Knity.attach('string as a vm'));
			}).to.throw('The view model must be an object');
		});

		it('should throw Error when we do not pass a valid DOM element', function() {

			expect(function() {
				(Knity.attach({}, null));
			}).to.throw('The View-Model must be attached to a DOM element. object given');
		});

		it('should not throw Error when we pass valid arguments', function() {

			expect(function() {

				var div = document.createElement('div');

				(Knity.attach( {}, div ));
			}).to.not.throw(Error);
		});
	});

	describe('#observable', function() {

		it('should return hello', function() {
			
			var observable = Knity.observable( '' );

			observable( 'hello' );

			expect(observable()).to.equal( 'hello' );
		});

		it('should return 3', function() {
			
			var observable = Knity.observable( 0 );

			observable( 3 );

			expect(observable()).to.equal( 3 );
		});
		
		it('should return an array of values', function() {
			
			var observable = Knity.observable( ['a', 'b', 'c'] );

			expect(observable()).deep.equal( ['a', 'b', 'c'] );
		});
		
		it('should return an array of objects', function() {
			
			var observable = Knity.observable( [ {letter: 'a'}, {letter: 'b'} ] );

			expect(observable()).deep.equal( [ {letter: 'a'}, {letter: 'b'} ] );
		});

	});
});