import document from "global/document";

function nope(_?: number) {}

type valueListenerFunc = (delta?: number) => void;
export default class MouseEventHandler {
  _vertical: boolean = false;
  _valueListener: valueListenerFunc;
  _toggleMouseOver: () => void;
  _prev: number;
  props: any;

  constructor({
    vertical = false,
    valueListener = nope,
    toggleMouseOver = nope
  }) {
    this._vertical = vertical;
    this._valueListener = valueListener;
    this._toggleMouseOver = toggleMouseOver;

    this._prev = 0;
  }

  handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    document.addEventListener("mouseup", this._mouseup);
    document.addEventListener("mousemove", this._mousemove);
    this._prev = this._getMousePos(e);
    this._toggleMouseOver();
  };

  _getMousePos(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    return this._vertical ? e.clientY : e.pageX;
  }
  _getTouchPosition(e: React.TouchEvent<HTMLDivElement>) {
    return this._vertical ? e.touches[0].clientY : e.touches[0].pageX;
  }

  _getMouseDelta(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // movementX might not be supported in some browser
    // https://stackoverflow.com/questions/41774726/mouseevent-movementx-property-apparently-not-supported-in-internet-explorer
    const mouseCoord = this._vertical ? e.movementY : e.movementX;
    const clientCoord = this._getMousePos(e);

    const delta = mouseCoord === 0 ? clientCoord - this._prev : mouseCoord;

    return delta;
  }

  _mouseup = () => {
    document.removeEventListener("mouseup", this._mouseup);
    document.removeEventListener("mousemove", this._mousemove);
    this._toggleMouseOver();
  };

  _mousemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    const delta = this._getMouseDelta(e);
    this._prev = this._getMousePos(e);

    this._valueListener(delta);
  };

  handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    document.addEventListener("touchend", this._touchend);
    document.addEventListener("touchmove", this._touchmove);
    this._prev = this._getTouchPosition(e);
    this._toggleMouseOver();
  };

  _touchmove = (e: React.TouchEvent<HTMLDivElement>) => {
    const delta = this._getTouchPosition(e) - this._prev;
    this._prev = this._getTouchPosition(e);
    this.props._valueListener(delta);
  };

  _touchend = () => {
    document.removeEventListener("touchend", this._touchend);
    document.removeEventListener("touchmove", this._touchmove);
    this._toggleMouseOver();
  };
}
