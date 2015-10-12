class Scrolling {
	constructor() {
		this._ticking = false;
		this._body    = document.body;
		this._scrollY = this._body.scrollTop;

		window.addEventListener('scroll', this.scroll.bind(this));

  	Helper.dispatchEvent(window, 'scroll');
	}

	requestTick() {
    if(!this._ticking) {
      requestAnimationFrame(this.update);
      this._ticking = true;
    }
	}

	scroll() {
		this._scrollY     = this._body.scrollTop;
		this._direction   = this._lastScrollY < this._scrollY ? 'down' : 'up';
		this._lastScrollY = this._scrollY;

    this.requestTick();
	}

	update() {
		this._currentScrollY = this._lastScrollY;
	}

	resize() {
		this._winHeight = win.height();
    this._winWidth = win.width();
	}
}

new Scrolling();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
