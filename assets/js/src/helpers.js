class Helper {
	static dispatchEvent(element, event) {
		const e = new Event(event);
	  element.dispatchEvent(e);
	}
}