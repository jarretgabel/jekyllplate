"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = (function () {
	function Helper() {
		_classCallCheck(this, Helper);
	}

	_createClass(Helper, null, [{
		key: "dispatchEvent",
		value: function dispatchEvent(element, event) {
			var e = new Event(event);
			element.dispatchEvent(e);
		}
	}]);

	return Helper;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Scrolling = (function () {
	function Scrolling() {
		_classCallCheck(this, Scrolling);

		this._ticking = false;
		this._body = document.body;
		this._scrollY = this._body.scrollTop;

		window.addEventListener('scroll', this.scroll.bind(this));

		Helper.dispatchEvent(window, 'scroll');
	}

	_createClass(Scrolling, [{
		key: 'requestTick',
		value: function requestTick() {
			if (!this._ticking) {
				requestAnimationFrame(this.update);
				this._ticking = true;
			}
		}
	}, {
		key: 'scroll',
		value: function scroll() {
			this._scrollY = this._body.scrollTop;
			this._direction = this._lastScrollY < this._scrollY ? 'down' : 'up';
			this._lastScrollY = this._scrollY;

			this.requestTick();
		}
	}, {
		key: 'update',
		value: function update() {
			this._currentScrollY = this._lastScrollY;
		}
	}, {
		key: 'resize',
		value: function resize() {
			this._winHeight = win.height();
			this._winWidth = win.width();
		}
	}]);

	return Scrolling;
})();

new Scrolling();
//# sourceMappingURL=all.js.map
