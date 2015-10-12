"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),Helper=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"dispatchEvent",value:function(e,n){var t=new Event(n);e.dispatchEvent(t)}}]),e}();
"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),Scrolling=function(){function t(){_classCallCheck(this,t),this._ticking=!1,this._body=document.body,this._scrollY=this._body.scrollTop,window.addEventListener("scroll",this.scroll.bind(this)),Helper.dispatchEvent(window,"scroll")}return _createClass(t,[{key:"requestTick",value:function(){this._ticking||(requestAnimationFrame(this.update),this._ticking=!0)}},{key:"scroll",value:function(){this._scrollY=this._body.scrollTop,this._direction=this._lastScrollY<this._scrollY?"down":"up",this._lastScrollY=this._scrollY,this.requestTick()}},{key:"update",value:function(){this._currentScrollY=this._lastScrollY}},{key:"resize",value:function(){this._winHeight=win.height(),this._winWidth=win.width()}}]),t}();new Scrolling;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiSGVscGVyIiwidGhpcyIsInZhbHVlIiwiZWxlbWVudCIsImV2ZW50IiwiZSIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIlNjcm9sbGluZyIsIl90aWNraW5nIiwiX2JvZHkiLCJkb2N1bWVudCIsImJvZHkiLCJfc2Nyb2xsWSIsInNjcm9sbFRvcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGwiLCJiaW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiX2RpcmVjdGlvbiIsIl9sYXN0U2Nyb2xsWSIsInJlcXVlc3RUaWNrIiwiX2N1cnJlbnRTY3JvbGxZIiwiX3dpbkhlaWdodCIsIndpbiIsImhlaWdodCIsIl93aW5XaWR0aCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUk3aEJrQixPQUFTLFdBQ1osUUFBU0EsS0FDUnBCLGdCQUFnQnFCLEtBQU1ELEdBV3ZCLE1BUkFoQixjQUFhZ0IsRUFBUSxPQUNwQkosSUFBSyxnQkFDTE0sTUFBTyxTQUF1QkMsRUFBU0MsR0FDdEMsR0FBSUMsR0FBSSxHQUFJQyxPQUFNRixFQUNsQkQsR0FBUUksY0FBY0YsT0FJakJMO0FDbkJSLFlBSUEsU0FBU3BCLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUk3aEIwQixVQUFZLFdBQ2YsUUFBU0EsS0FDUjVCLGdCQUFnQnFCLEtBQU1PLEdBRXRCUCxLQUFLUSxVQUFXLEVBQ2hCUixLQUFLUyxNQUFRQyxTQUFTQyxLQUN0QlgsS0FBS1ksU0FBV1osS0FBS1MsTUFBTUksVUFFM0JDLE9BQU9DLGlCQUFpQixTQUFVZixLQUFLZ0IsT0FBT0MsS0FBS2pCLE9BRW5ERCxPQUFPTyxjQUFjUSxPQUFRLFVBaUM5QixNQTlCQS9CLGNBQWF3QixJQUNaWixJQUFLLGNBQ0xNLE1BQU8sV0FDREQsS0FBS1EsV0FDVFUsc0JBQXNCbEIsS0FBS21CLFFBQzNCbkIsS0FBS1EsVUFBVyxNQUlsQmIsSUFBSyxTQUNMTSxNQUFPLFdBQ05ELEtBQUtZLFNBQVdaLEtBQUtTLE1BQU1JLFVBQzNCYixLQUFLb0IsV0FBYXBCLEtBQUtxQixhQUFlckIsS0FBS1ksU0FBVyxPQUFTLEtBQy9EWixLQUFLcUIsYUFBZXJCLEtBQUtZLFNBRXpCWixLQUFLc0IsaUJBR04zQixJQUFLLFNBQ0xNLE1BQU8sV0FDTkQsS0FBS3VCLGdCQUFrQnZCLEtBQUtxQixnQkFHN0IxQixJQUFLLFNBQ0xNLE1BQU8sV0FDTkQsS0FBS3dCLFdBQWFDLElBQUlDLFNBQ3RCMUIsS0FBSzJCLFVBQVlGLElBQUlHLFlBSWhCckIsSUFHUixJQUFJQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSGVscGVyID0gKGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gSGVscGVyKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWxwZXIpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEhlbHBlciwgbnVsbCwgW3tcblx0XHRrZXk6IFwiZGlzcGF0Y2hFdmVudFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIGV2ZW50KSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFdmVudChldmVudCk7XG5cdFx0XHRlbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEhlbHBlcjtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFNjcm9sbGluZyA9IChmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFNjcm9sbGluZygpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsaW5nKTtcblxuXHRcdHRoaXMuX3RpY2tpbmcgPSBmYWxzZTtcblx0XHR0aGlzLl9ib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHR0aGlzLl9zY3JvbGxZID0gdGhpcy5fYm9keS5zY3JvbGxUb3A7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGwuYmluZCh0aGlzKSk7XG5cblx0XHRIZWxwZXIuZGlzcGF0Y2hFdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhTY3JvbGxpbmcsIFt7XG5cdFx0a2V5OiAncmVxdWVzdFRpY2snLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0VGljaygpIHtcblx0XHRcdGlmICghdGhpcy5fdGlja2luZykge1xuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuXHRcdFx0XHR0aGlzLl90aWNraW5nID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzY3JvbGwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzY3JvbGwoKSB7XG5cdFx0XHR0aGlzLl9zY3JvbGxZID0gdGhpcy5fYm9keS5zY3JvbGxUb3A7XG5cdFx0XHR0aGlzLl9kaXJlY3Rpb24gPSB0aGlzLl9sYXN0U2Nyb2xsWSA8IHRoaXMuX3Njcm9sbFkgPyAnZG93bicgOiAndXAnO1xuXHRcdFx0dGhpcy5fbGFzdFNjcm9sbFkgPSB0aGlzLl9zY3JvbGxZO1xuXG5cdFx0XHR0aGlzLnJlcXVlc3RUaWNrKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuXHRcdFx0dGhpcy5fY3VycmVudFNjcm9sbFkgPSB0aGlzLl9sYXN0U2Nyb2xsWTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZXNpemUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZXNpemUoKSB7XG5cdFx0XHR0aGlzLl93aW5IZWlnaHQgPSB3aW4uaGVpZ2h0KCk7XG5cdFx0XHR0aGlzLl93aW5XaWR0aCA9IHdpbi53aWR0aCgpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTY3JvbGxpbmc7XG59KSgpO1xuXG5uZXcgU2Nyb2xsaW5nKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9